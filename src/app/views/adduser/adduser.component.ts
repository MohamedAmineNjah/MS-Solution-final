import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit, Input } from '@angular/core';
import User from '../moduser/user';

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.scss']
})
export class AdduserComponent implements OnInit {
  id: string;
  telephone : string;
  email : string;
  nom : string;
  prenom : string;
  username : string;

  roleUser: string;

  organisation_id : string;

  posts : User[] = [];
  /* constructor(http : HttpClient) {
    http.get('http://localhost:59420/api/User/getListUsers').subscribe(response =>{
      console.log(response);

    });
    
   } */

  /* constructor(private http: HttpClient) {
    http.get('http://localhost:59420/api/User/getListUsers').subscribe(response => {
      this.posts = response;

    }); 

  }*/
  constructor(private http: HttpClient) {
    http.get<User[]>('http://localhost:59420/api/User/getListUsers').subscribe(response => {
      this.posts = response['listOfUsers'];

    });
  }

  createPost() {

    //let post = { nom : input.value };
    //input.value = '';
var opost = new URLSearchParams();
opost.append('nom', this.nom );
opost.append('prenom',this.prenom);
opost.append('username',this.username);
opost.append('email',this.email);
opost.append('telephone',this.telephone);
opost.append('roleUser',this.roleUser);
opost.append('organisation_id',this.organisation_id);
opost.append('pass',"123456789");

    this.http.post('http://localhost:59420/api/User/getListUser?'+opost.toString(), null)
      .subscribe(response => {
        //post['id'] = response;
        console.log(response);
       this.posts.push;
error => console.log(error)

      });

  }









 /*  modifieruser() {

    //let post = { nom : input.value };
    //input.value = '';
var opost = new URLSearchParams();
opost.set('id',"dba69c32a70c47dea715a69abc0d7ce1");

opost.set('firstName',"eeee");
opost.set('lastName',"jjjj");
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
       this.posts.push;
error => console.log(error)

      });

  } */

  /*deletePost() {

    //let post = { nom : input.value };
    //input.value = '';
var opost = new URLSearchParams();
opost.set('id',"dba69c32a70c47dea715a69abc0d7ce1");

//opost.set('firstName',"eeee");
//opost.set('lastName',"jjjj");
//opost.set('username',"rekisab");
//opost.set('email',"zefzef@espri.tn");
//opost.set('telephone',"50552552");
//opost.set('roleUser',"Agent Bank");
//opost.set('organisation_id',"3");
//opost.set('pass',"123456789");

    this.http.delete('http://localhost:59420/api/User/Delete?'+opost.toString(), null)
      .subscribe(response => {
        //post['id'] = response;
        console.log(response);
       this.posts.push;
error => console.log(error)

      });

  }*/



  ngOnInit() {
  }

}
