import {Component} from "@angular/core";

@Component({
  selector: 'app-home-workspace-monitoring-indicator',
  template: `
    <div class="container">
      <nz-card [nzTitle]="cardTitle" nzBorderless>

      </nz-card>
      <ng-template #cardTitle>
        <div class="card-title">
          <div class="card-img">
            <img src="assets/home/recent-visit.svg">
          </div>
          <div class="card-title-desc">监测指标</div>
        </div>
      </ng-template>
    </div>
  `,
  styles: [`
      .container{
        margin-top: 8px;
        margin-bottom: 8px;
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
export class HomeWorkspaceMonitoringIndicatorComponent {

}
