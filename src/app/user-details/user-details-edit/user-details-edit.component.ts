import { Component, OnInit } from '@angular/core';
import { UserFullDetails } from 'src/app/user/user-get-by-email/userfulldetails';
import { UserDetails } from '../user-details';
import { UserDetailsService } from '../user-details.service';

@Component({
  selector: 'app-user-details-edit',
  templateUrl: './user-details-edit.component.html',
  styleUrls: ['./user-details-edit.component.css']
})
export class UserDetailsEditComponent implements OnInit {
  originalUser:any;
  constructor(private userDetailsService:UserDetailsService) { }
  ngOnInit(): void {
    //this.originalUser=history.state;
    console.log(history.state);
  }
  email:string=history.state.email;
  age:number=history.state.age;
  gender:string=history.state.gender;
  mobile:string=history.state.mobile;
  name:string=history.state.name;
  password:string=history.state.password;
  user:UserDetails=history.state.userdetails;
  /*userId:number=history.state.userdetails.userId;
  address:string=history.state.userdetails.address;
  state :string=history.state.userdetails.state;
  city :string=history.state.userdetails.city;
  pin :string=history.state.userdetails.pin;
  emptype :string=history.state.userdetails.emptype;
  salary :number=history.state.userdetails.salary;
  aadhar :string=history.state.userdetails.aadhar;
  pan :string=history.state.userdetails.pan;
  salarySlip :string=history.state.userdetails.salarySlip;
  addressProof:string=history.state.userdetails.addressProof;*/
  
  updatedUser=new UserFullDetails(this.email,this.age,this.gender,this.mobile,this.name,this.password,this.user);
  userDetails:UserDetails=new UserDetails(this.user.userId,this.user.address,this.user.state,this.user.city,this.user.pin,this.user.emptype,this.user.salary,this.user.aadhar,this.user.pan,this.user.salarySlip,this.user.addressProof);
  editUserDetails(){
    this.userDetailsService.updateUserDetails(this.userDetails).subscribe((resp:any)=>{
      console.log(resp);
      if(resp!=null){
        alert("Edit Succesful");
      }
      if(resp==null){
        alert("No Pending Loan Applications found")
      }
    });
  
  }

}
