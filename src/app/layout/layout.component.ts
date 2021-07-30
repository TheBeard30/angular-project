import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.less']
})
export class LayoutComponent implements OnInit {


  isCollapsed: boolean = false;

  selectMenu: string = 'spread';

  darkMenuTheme: boolean = true;

  constructor(
    private router: Router,
    private activeRoute: ActivatedRoute
  ){

  }

  jumpTo($event,componentName: string){
    $event.preventDefault();
    this.router.navigate([componentName],{queryParams: {query: componentName}});
  }

  

  ngOnInit(): void {
    this.activeRoute.queryParams.subscribe(
      data => {
        data && ('query' in data) && (this.selectMenu = data.query); 
      }
    );

  }

}
