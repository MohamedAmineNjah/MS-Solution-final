  import { Component, OnInit, NgModule } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { JwtService } from '../jwt.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  username : string;
  password : string;

  constructor( private router: Router ,private _activatedRoute: ActivatedRoute,
    private jwtService : JwtService
    ) {
      //if (this.jwtService.loggedIn)
      //this._router.navigate(['/home']);
     }
  onBackButtonClick() {
    // test login
    this.jwtService.login(this.username, this.password,'password');
     // res => {this._router.navigate(['/home']);
    // this._router.navigate(['/home']);

 // sessionStorage.setItem('nom','nnnnndgbbbbbbbb');   //t3abi variable 
 
}
  ngOnInit() {
    
    
  }

}
