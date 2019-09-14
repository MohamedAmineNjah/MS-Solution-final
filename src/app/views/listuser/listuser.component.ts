import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import User from '../moduser/user';

@Component({
  selector: 'app-listuser',
  templateUrl: './listuser.component.html',
  styleUrls: ['./listuser.component.scss']
})
export class ListuserComponent implements OnInit {
  loadedpost : User[] = [];
  constructor(private http : HttpClient) {
    http.get<User[]>('http://localhost:59420/api/User/getListUsers').subscribe(  response=>{
      //this.loadedpost = response ;
      console.log(response);


      this.loadedpost = response['listOfUsers']


    })
    
   }

  ngOnInit() {
  }

}
