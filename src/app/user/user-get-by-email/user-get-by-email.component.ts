import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserDetails } from 'src/app/user-details/user-details';
import { UserService } from '../user.service';
import { UserFullDetails } from './userfulldetails';

@Component({
  selector: 'app-user-get-by-email',
  templateUrl: './user-get-by-email.component.html',
  styleUrls: ['./user-get-by-email.component.css']
})
export class UserGetByEmailComponent implements OnInit {

  
email:string='';
age:number=0;
gender:string='';
mobile:string='';
name:string='';
password:string='';
userId:number=0;
 
address:string='';
state :string='';
city :string='';
pin :string='';
emptype :string='';
salary :number=0;
aadhar :string='';
pan :string='';
salarySlip :string='';
addressProof:string='';
userDetails:UserDetails=new UserDetails(this.userId,this.address,this.state,this.city,this.pin,this.emptype,this.salary,this.aadhar,this.pan,this.salarySlip,this.addressProof);
user:UserFullDetails=new UserFullDetails(this.email,this.age,this.gender,this.mobile,this.name,this.password,this.userDetails);
 
  constructor( private userservice: UserService,private router: Router,private actRoute:ActivatedRoute
    ) { 
     this.email=this.actRoute.snapshot.params['email'];
     console.log("email="+this.email);
    }
 
  ngOnInit(): void {
    this.userservice.getUserDetails(this.email).subscribe((Response:any)=>{
      console.log(Response);
      this.user=Response;
    })
  }

  editUserDetails(originalUserDetails:UserFullDetails){
    this.router.navigateByUrl('/user-details-edit',{state:{originalUserDetails}});
  }
  /*okChecked(){
    this.router.navigate(['/loan-application-list',this.email]);
  }*/
 
}