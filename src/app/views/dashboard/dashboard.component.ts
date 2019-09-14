import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  templateUrl: 'dashboard.component.html'
})
export class DashboardComponent {
  title : string = sessionStorage.getItem('nom');
  constructor( ) { }

}
