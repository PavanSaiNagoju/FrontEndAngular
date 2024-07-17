import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoanApplicationService } from '../loan-application.service';

@Component({
  selector: 'app-loan-application-submit',
  templateUrl: './loan-application-submit.component.html',
  styleUrls: ['./loan-application-submit.component.css']
})
export class LoanApplicationSubmitComponent implements OnInit {

  constructor(private loanService:LoanApplicationService, private router:Router, private actRoute:ActivatedRoute) { 
    this.email=this.actRoute.snapshot.params['email'];
    console.log("email="+this.email);
    this.userId=this.actRoute.snapshot.params['email'];
    console.log("userId="+this.userId);
  }
  email:string='';
  doorNo:string='';
  userId:number=0;
  ngOnInit(): void {
  }

  searchLoan(){
    this.router.navigate(['/loan-application-search',this.doorNo]);
  }
  viewPendingLoanAppButton(){
    this.router.navigate(['/loan-application-pending-user-view',this.email]);
  }
  viewApprovedLoanAppButton(){
   
    this.router.navigate(['/loan-application-approved-user',this.email]);
    
  }
  

  viewAccountDetails(){
    this.router.navigate(['/user-view-account-details',this.email]);
  }
  viewRejectedLoanAppButton(){
    this.router.navigate(['/loan-application-rejected-user',this.email]);
     
  }
  returnToHome(){
    this.router.navigate(['/loan-application-list',this.email,this.userId]);
  }


}
