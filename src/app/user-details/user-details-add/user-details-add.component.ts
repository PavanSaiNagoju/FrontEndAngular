import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserFullDetails } from 'src/app/user/user-get-by-email/userfulldetails';
import { UserService } from 'src/app/user/user.service';
import { UserDetails } from '../user-details';
import { UserDetailsService } from '../user-details.service';

@Component({
  selector: 'app-user-details-add',
  templateUrl: './user-details-add.component.html',
  styleUrls: ['./user-details-add.component.css']
})
export class UserDetailsAddComponent implements OnInit {

  Emptype=['Part-time','Full-time','Casual'];
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
 userModule : UserDetails=new UserDetails(this.userId,this.address, this.state,this.city ,this.pin ,
 this.emptype, this.salary ,
 this.aadhar,
 this.pan,
 this.salarySlip,
 this.addressProof );
   userdetailsArray: any;
  email:string="";
   constructor(private userDetailsService: UserDetailsService,private  userService: UserService,
     private router: Router,  private actRoute:ActivatedRoute
     ) { 
      this.email=this.actRoute.snapshot.params['email'];
      console.log("email="+this.email);
     }
     
     userDetails:UserFullDetails= new UserFullDetails(this.email,this.age,this.gender,this.mobile,this.name,this.password,this.userModule);
   ngOnInit(): void {
   }
     addUserDetails(){
      
     this.userDetailsService.addUserDetails(this.email,this.userModule).subscribe((response:any)=>
     {console.log("Add User:"+response);
     if(response!=null){
       alert("Registered Successfully");
       this.userService.getUserDetails(this.email).subscribe((response:any)=>
       {this.userDetails=response;
      console.log(response);
    console.log(this.userDetails.userdetails.userId);
    this.router.navigate(['/loan-application-list',this.email,this.userDetails.userdetails.userId]);});
       //console.log("userId is"+this.userDetails.userdetails.userId);
       
     }

     });
    alert("addedd successfully");
   
     
    }
  }