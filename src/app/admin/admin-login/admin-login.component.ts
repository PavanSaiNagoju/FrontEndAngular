import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Admin } from '../admin';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {

  email:string = '';
  password: string = '';
  
  constructor(private httpClient:HttpClient, private router: Router, private adminService: AdminService) { }
 
  logindata: any;
  admin1: any;
  ngOnInit(): void {

  }
  admin: Admin = new Admin(this.email, this.password);
  headers: any;
  Login(){

    this.adminService.checkLogin(this.admin).subscribe(Response=>{
      if(Response != null) {
      this.admin1=Response;
      this.router.navigate(["/admin-functionality"]);
    }}
    ,error=>{
      if(error){
        alert("invalid credentials")
      }
    }
  )
  }
}
 
