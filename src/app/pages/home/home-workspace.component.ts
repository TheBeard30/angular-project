import {Component} from "@angular/core";

@Component({
  selector: 'app-home-workspace',
  template: `
    <div class="workspace">
      <nz-card nzBorderless
               [nzTitle]="cardTitle" [nzExtra]="cardSetting">
        <app-home-workspace-list *ngFor="let workspace of workspaceList" [workspace]="workspace"></app-home-workspace-list>
      </nz-card>
    </div>
    <ng-template #cardTitle>
      <div class="card-title">
        <div class="card-img">
          <img src="assets/home/workspace.svg">
        </div>
        <div class="card-title-desc">工作空间</div>
      </div>
    </ng-template>
    <ng-template #cardSetting>
      <img src="assets/home/setting.svg">
    </ng-template>
  `,
  styles: [`
    .workspace{
      margin-top: 8px;
      padding: 16px 16px 0 16px;
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
    :host::ng-deep{
      .ant-card-head {
        border-bottom: none;
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
export class HomeWorkspaceComponent{
  workspaceList = [
    {
      name: '医院数字化运营分析',
      owner: 'admin',
      userCount: 20,
      chartCount: 12,
      reportCount: 12,
      dashboardCount: 12
    },
    {
      name: '个人空间',
      owner: 'admin',
      userCount: 20,
      chartCount: 12,
      reportCount: 12,
      dashboardCount: 12
    },
    {
      name: '默认空间',
      owner: 'admin',
      userCount: 20,
      chartCount: 12,
      reportCount: 12,
      dashboardCount: 12
    }
  ];
}
