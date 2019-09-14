import { JwtService } from './../../jwt.service';
import { HttpClient } from '@angular/common/http';
import { routes } from './../../app.routing';
import { Router, Routes } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import User from './user';





@Component({
  selector: 'app-moduser',
  templateUrl: './moduser.component.html',
  styleUrls: ['./moduser.component.scss']
})
export class ModuserComponent implements OnInit {
  //id : string;
  telephone : string;
  email : string;
  firstName : string;
  lastName : string;
  username : string;

  roleUser: string;

  organisation_id : string;


  selectedUser : User;
   loadedpost : User[] = [];
  // posts : User[] = [];
    i : number =0;
  constructor(private http : HttpClient) {
    http.get<User[]>('http://localhost:59420/api/User/getListUsers').subscribe(  response=>{
      //this.loadedpost = response ;
      console.log(response);



/*       while ( this.i < response['listOfUsers'].length )
      {
        this.loadedpost.push(response['listOfUsers'][this.i]);
        this.i++;
      } */

      this.loadedpost = response['listOfUsers']


    })
    
   }

   onRecherche(user: User) {
     
    this.selectedUser = user;
    //this.nom=this.selectedUser.nom;
    //this.prenom=this.selectedUser.prenom;
   // this.id = this.selectedUser.id;
  }


   modifieruser() {

    //let post = { nom : input.value };
    //input.value = '';
var opost = new URLSearchParams();
opost.append('id', this.selectedUser.id );

opost.append('firstName',this.firstName);
opost.append('lastName',this.lastName);
//opost.set('username',"rekisab");
//opost.set('email',"zefzef@espri.tn");
//opost.set('telephone',"50552552");
//opost.set('roleUser',"Agent Bank");
//opost.set('organisation_id',"3");
//opost.set('pass',"123456789");

    this.http.put('http://localhost:59420/api/User/Put?'+opost.toString(), null)
      .subscribe(response => {
        //post['id'] = response;
        console.log(response);
      // this.posts.push;
error => console.log(error)

      });

  } 


  deletePost() {

    //let post = { nom : input.value };
    //input.value = '';
var opost = new URLSearchParams();
opost.append('id', this.selectedUser.id );

//opost.set('firstName',"eeee");
//opost.set('lastName',"jjjj");
//opost.set('username',"rekisab");
//opost.set('email',"zefzef@espri.tn");
//opost.set('telephone',"50552552");
//opost.set('roleUser',"Agent Bank");
//opost.set('organisation_id',"3");
//opost.set('pass',"123456789");

    this.http.delete('http://localhost:59420/api/User/Delete?'+opost.toString())
      .subscribe(response => {
        //post['id'] = response;
        console.log(response);
       //this.posts.push;
error => console.log(error)

      });

  }


  ngOnInit() {
  }


  alerte(){
    console.log("alerte");
  }

}
