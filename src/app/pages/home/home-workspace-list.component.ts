import {Component, Input} from "@angular/core";
import {Workspace} from "./interface/workspace.interface";

@Component({
  selector: 'app-home-workspace-list',
  template: `
    <div class="container">
      <div class="details">
        <div class="name">
          {{workspace.name}}
        </div>
        <div class="user">
          <span class="owner">所有者:&nbsp; {{workspace.owner}}</span>
          <span class="user-count">用户数:&nbsp; {{workspace.userCount}}</span>
        </div>
      </div>
      <div class="count">
        <div class="img">
          <img src="assets/home/board.svg"> 12
        </div>
        <div class="img">
          <img src="assets/home/report.svg"> 12
        </div>
        <div class="img">
          <img src="assets/home/portal.svg"> 12
        </div>
      </div>
    </div>
  `,
  styles: [
    `.container{
      height: 114px;
      border: 1px solid #E5E6EB;
      box-sizing: border-box;
      border-radius: 4px;
      margin-bottom: 16px;
      .details{
        padding: 16px 16px 12px 16px;
        border-bottom: 1px solid #E5E6EB;
        .name{
          position: relative;
          margin-bottom: 8px;
          font-family: PingFang SC;
          font-style: normal;
          font-weight: 500;
          font-size: 14px;
          line-height: 22px;
          color: rgba(0, 0, 0, 0.85);
        }
        .name::before{
          content: '';
          left: -5px;
          top: 4px;
          position: absolute;
          height: 14px;
          width: 2px;
          background: #4980FF;
        }
        .user{
          color: rgba(0, 0, 0, 0.65);
          .owner{
            padding-right: 8px;
            border-right: 1px solid #E4E9F6;;
          }
          .user-count{
            padding-left: 8px;
          }
        }
      }
      .count{
        display: flex;
        align-items: center;
        justify-content: space-around;
        height: 30px;
        color: rgba(0, 0, 0, 0.45);
      }
      .img{
        display: inline-block;
      }
    }`,

  ]
})
export class HomeWorkspaceListComponent{

  @Input() workspace: Workspace;

}


