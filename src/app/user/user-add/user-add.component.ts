import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserDetails } from 'src/app/user-details/user-details';
import { user } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.css']
})
export class UserAddComponent implements OnInit {

  email:string='';
  age:number=0;
  gender:string='';
  mobile:string='';
  name:string='';
  password:string='';
 
  
  
    newuser:user =new user(this.email,this.age,this.gender,this.mobile,this.name,this.password);
  constructor(private userservice: UserService, private router:Router) {
 
   }
  ngOnInit(): void {
  }
  submitAddForm(){
    console.log(this.newuser);
    this.userservice.adduser(this.newuser).subscribe((response:any)=>{
      if(response!=null){
        alert("User Registered successfully, Please click next to fill additional details");
        this.router.navigate(['/user-details-add',this.newuser.email]);
      }
      
      console.log("Add User:"+response);
  })
    
 
  }
}