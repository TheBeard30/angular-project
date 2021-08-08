import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { WorkflowService } from '../pages/graph-editor/service/workflow.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.less']
})
export class LayoutComponent implements OnInit {


  isCollapsed: boolean = false;

  selectMenu: string = 'spread';

  darkMenuTheme: boolean = true;

  menuOpenList = {
    'test': true,
    'graph': false
  };

  constructor(
    private router: Router,
    private activeRoute: ActivatedRoute,
    private workflowService: WorkflowService
  ){

  }

  ngOnInit(): void {
    this.activeRoute.queryParams.subscribe(
      data => {
        data && ('query' in data) && (this.selectMenu = data.query); 
      }
    );

  }

  jumpTo($event,componentName: string,moduleName?: string){
    $event.preventDefault();
    let url = `${moduleName ? moduleName + '/' : ''}${componentName}`;
    this.router.navigate([url],{queryParams: {query: componentName}});
  }

  /**
   * 改变打开的菜单
   * @param {string} currtMenuName 当前点击的菜单 
   */
  openChangeHandler(currtMenuName: string): void{
    for(let key in this.menuOpenList){
      if(key != currtMenuName){
        this.menuOpenList[key] = false;
      }
    }
  }

  changeCollapse(ev){
    this.workflowService.subject.next(this.isCollapsed);
  }

}
