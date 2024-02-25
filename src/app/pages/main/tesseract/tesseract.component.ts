import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import { NzUploadFile } from 'ng-zorro-antd/upload';
import Tesseract, { createWorker } from 'tesseract.js';
import {NzNotificationService} from "ng-zorro-antd/notification";


@Component({
  selector: 'app-tesseract',
  templateUrl: './tesseract.component.html',
  styleUrls: ['./tesseract.component.less']
})
export class TesseractComponent implements OnInit,OnDestroy {

  @ViewChild('file') fileElement;

  fileList: NzUploadFile[] = [];
  previewImage: string;
  previewVisible: boolean = false;
  content: string = '';
  constructor(
    private nzNotificationService: NzNotificationService
  ) { }

  worker: Tesseract.Worker;

  ngOnInit(): void {
    this.loadWorker();
  }

  ngOnDestroy(): void {
    if(this.worker){
      this.worker.terminate();
    }
  }

  async loadWorker(){
    const worker = createWorker({
      logger: m => console.log(m)
    });

    await worker.load();
    await worker.loadLanguage('chi_sim');
    await worker.initialize('chi_sim');
    this.worker = worker;
  }

  async clickMethod() {
    if(!this.fileList || this.fileList.length == 0){
      this.nzNotificationService.warning('无上传图片','');
      return;
    }
    console.log(this.fileList);
    const file = this.fileList[0].originFileObj;
    const { data: { text } } = await this.worker.recognize(file);
    this.content = text;
    console.log(text);
  }

  beforeUpload = (file: NzUploadFile): boolean => {
    this.fileList = this.fileList.concat(file);
    return false;
  };



  handlePreview = async (file: NzUploadFile): Promise<void> => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj!);
    }
    this.previewImage = file.url || file.preview;
    this.previewVisible = true;
  };
}

const getBase64 = (file: File): Promise<string | ArrayBuffer | null> =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = error => reject(error);
  });
