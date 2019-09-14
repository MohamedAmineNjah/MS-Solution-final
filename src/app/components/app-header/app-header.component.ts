import { JwtService } from './../../jwt.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './app-header.component.html'
})
export class AppHeaderComponent  { 
constructor( private jwtService : JwtService) {
   }
  
  deconnecter() {
   
    this.jwtService.logout();
  }





}