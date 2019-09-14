import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
//import {HomeComponent} from './components/home/home.component'
@Component({
  // tslint:disable-next-line
  selector: 'body',
  template: '<router-outlet></router-outlet>'


})
export class AppComponent implements OnInit {
  constructor(private _router: Router ,private _activatedRoute: ActivatedRoute,
    ) { }


  ngOnInit() {
    this._router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
        return;
      }
      window.scrollTo(0, 0)
    });
  }
  
}
