import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-loan-application-list',
  templateUrl: './loan-application-list.component.html',
  styleUrls: ['./loan-application-list.component.css']
})
export class LoanApplicationListComponent implements OnInit {
  email:string="";
  userId:number=0;
  constructor(private router:Router,private actRoute:ActivatedRoute) { 
    this.email = this.actRoute.snapshot.params['email'];
    console.log("email="+this.email);
    this.userId=this.actRoute.snapshot.params['userId'];
    console.log("userId="+this.userId);
  }
  type:number=0;
  interest:number=0;
  ngOnInit(): void {
  }
  
  applyLoanButton(typeReturned:number,interestReturned:number){
    console.log("hello Apply Button");
    this.type=typeReturned;
    this.interest=interestReturned;
    if(this.email!=null && this.userId!=null)
    this.router.navigate(['/loan-application-add',this.type,this.interest,this.email,this.userId]);
    else
    alert("Please Login/Register first")
  }
  adminLogin() {
    this.router.navigate(['/admin-login']);
  }
  userLogin(){
    this.router.navigate(['/user-login']);
  }
  loanApplications(){
    if(this.email!=null && this.userId!=null)
    this.router.navigate(["/loan-application-submit",this.userId,this.email]);
    else
    alert("Please Login/Register first")
  }
  getById(){
    if(this.email!=null && this.userId!=null)
    this.router.navigate(["/user-get-by-email",this.email]);
    else
    alert("Please Login/Register first")
  }

  
  logout(){
    this.router.navigate(["/loan-application-list"]);
  }
  
}
