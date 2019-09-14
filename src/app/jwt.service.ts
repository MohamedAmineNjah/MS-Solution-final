import { routes } from './app.routing';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { tap } from 'rxjs/operators';

@Injectable()
export class JwtService {

  constructor(private httpClient : HttpClient,private router: Router) { }

  options = {
    headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
  };


   login(username:string, password:string,grant_type : string) {
    console.log(username)
    const  body = new URLSearchParams(); 
    body.append('grant_type', 'password');  
    body.append('username', username);
    body.append('password', password);
    
    return this.httpClient.post<{access_token:  string}>('http://localhost:59420/Token?', body.toString(), this.options).subscribe(res => {
    localStorage.setItem('access_token', res.access_token);//setItem pour ajouter un token
    this.router.navigate(['/home']);
   
     
});
} 
//pour voir est ce que le mail et le password conforme avec http/....SmartConnectServer/TOken ou nn !



/* register(email:string, password:string) {
  return this.httpClient.post<{access_token: string}>('http://192.168.1.17/SmartConnectServer/Token', {email, password}).pipe(tap(res => {
  //this.login(email, password)
}))
} */


logout() {
  localStorage.removeItem('access_token');
}


public get loggedIn(): boolean{
  return localStorage.getItem('access_token') !==  null;
}
}
//get tekhou
//set bech tajouti