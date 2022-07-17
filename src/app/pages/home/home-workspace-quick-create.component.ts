import {Component, Input} from "@angular/core";

@Component({
  selector: 'app-home-workspace-quick-create',
  template: `
    <div class="container">
      <div class="title">
        <div class="title-img">
          <img src="assets/home/create.svg">
        </div>
        <div class="title-desc">
          快速创建
        </div>
      </div>
      <div class="operate-content">
        <div class="operate" *ngFor="let operate of createTypeList">
          <img [src]="operate.source">
          <div>{{operate.type}}</div>
        </div>
      </div>
    </div>
  `,
  styles: [
    `
      .container{
        padding: 16px;
        .title{
          display: inline-flex;
          .title-img{
            width: 22px;
            height: 22px;
            border-radius: 5px;
            background: rgba(73,128,255,0.1);
            display: flex;
            align-items: center;
            justify-content: center;
            img{
              width: 14px;
              height: 14px;
            }
          }
          .title-desc{
            margin-left: 8px;
            font-family: PingFang SC;
            font-style: normal;
            font-weight: 500;
            font-size: 16px;
            line-height: 24px;
            color: rgba(0, 0, 0, 0.85);
          }
        }
        .operate-content{
          display: flex;
          flex-wrap: wrap;
          margin-bottom: 16px;
          text-align: center;
          .operate{
            padding-top: 16px;
            width: calc(100% / 4);
          }
        }
      }
    `
  ]
})
export class HomeWorkspaceQuickCreateComponent {

  createTypeList: Array<{type: string,source: string}> = [
    {
      type: '数据源',
      source: 'assets/home/数据源.svg'
    },
    {
      type: '数据集',
      source: 'assets/home/数据集.svg'
    },
    {
      type: '图表分析',
      source: 'assets/home/图表分析.svg'
    },
    {
      type: '电子表格',
      source: 'assets/home/电子表格.svg'
    },
    {
      type: '自助报表',
      source: 'assets/home/自助报表.svg'
    },
    {
      type: '指标看板',
      source: 'assets/home/指标看板.svg'
    },
    {
      type: '数据门户',
      source: 'assets/home/数据门户.svg'
    }
  ];
}


