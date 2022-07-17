import {Component} from "@angular/core";

@Component({
  selector: 'app-home-workspace-recent-visit',
  template: `
    <div class="container">
      <nz-card  nzBorderless [nzTitle]="visitTitle">
        <div class="card-content" nz-row [nzGutter]="16">
          <div class="card-content-item" *ngFor="let item of recentList" nz-col [nzSpan]="6">
            {{item.name}}
          </div>
        </div>
      </nz-card>
      <ng-template #visitTitle>
        <div class="card-title">
          <div class="card-img">
            <img src="assets/home/recent-visit.svg">
          </div>
          <div class="card-title-desc">最近访问</div>
        </div>
      </ng-template>
    </div>
  `,
  styles: [`
    .container{
      padding: 16px;
      background: #FFFFFF;
    }
    .card-title{
      display: flex;
      .card-img{
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
      .card-title-desc{
        margin-left: 8px;
        font-family: PingFang SC;
        font-style: normal;
        font-weight: 500;
        font-size: 16px;
        line-height: 24px;
        color: rgba(0, 0, 0, 0.85);
      }
    }
    .card-content{
      display: flex;
      flex-wrap: wrap;
      .card-content-item{
        position: relative;
        margin-top: 8px;
        margin-bottom: 8px;
      }
      .card-content-item::before{
        content: "";
        position: absolute;
        width: 4px;
        height: 4px;
        left: -5px;
        top: 9px;
        background: #4980FF;
        border-radius: 2px;
      }
    }

    :host::ng-deep{
      .ant-card-head {
        padding: 0;
      }
      .ant-card-head-title {
        padding-top: 0;
      }
      .ant-card-extra {
        padding-top: 0;
      }
      .ant-card-body {
        padding: 0;
      }
    }
  `]
})
export class HomeWorkspaceRecentVisitComponent {

  recentList = [
    {name: '省人民医院医技业务分析'},
    {name: '省人民医院医技业务分析'},
    {name: '省人民医院医技业务分析'},
    {name: '省人民医院医技业务分析'},
    {name: '省人民医院医技业务分析'},
    {name: '省人民医院医技业务分析'},
    {name: '省人民医院医技业务分析'},
    {name: '省人民医院医技业务分析'},
  ];

  constructor() {
  }

}
