import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.less']
})
export class LayoutComponent implements OnInit {


  isCollapsed: boolean = false;

  selectMenu: string | undefined = 'spread';

  darkMenuTheme: boolean = true;

  constructor(
    private router: Router,
    private activeRoute: ActivatedRoute
  ){

  }

  jumpTo($event,componentName: string){
    $event.preventDefault();
    this.router.navigateByUrl(componentName);
  }

  

  ngOnInit(): void {
    // this.router.events.subscribe(
    //   data => {
    //     if(data instanceof NavigationEnd){
    //       console.log(data);
    //       this.selectMenu = data.url.replace('/','');
    //     }
    //   }
    // );

  }

}
