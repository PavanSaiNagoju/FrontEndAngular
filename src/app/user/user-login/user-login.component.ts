import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Login } from '../login';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

  email:string = '';
  password: string = '';
  
  
  constructor(private httpClient:HttpClient, private userservice: UserService,private router: Router) { }
 
  logindata: any;
  login1: any;
  ngOnInit(): void {}
  logs: Login= new Login(this.email, this.password);
  
  Login(){
    
    this.userservice.checkLogin(this.logs)
    .subscribe(Response=>{
      if(Response != null) {
      this.login1=Response;
      this.router.navigate(["/loan-application-list",this.logs.email,this.login1.userdetails.userId]);
    
    }
    
  },error=>{
    if(error){
      alert("invalid credentials")
    }
  }
  
  )}

  userAdd(){
    this.router.navigate(["user-register"]);
  }
 
  }

