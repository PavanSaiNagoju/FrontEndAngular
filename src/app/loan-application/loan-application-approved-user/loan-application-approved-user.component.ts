import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoanApplicationService } from '../loan-application.service';

@Component({
  selector: 'app-loan-application-approved-user',
  templateUrl: './loan-application-approved-user.component.html',
  styleUrls: ['./loan-application-approved-user.component.css']
})
export class LoanApplicationApprovedUserComponent implements OnInit {
email:string="";
loanApplications:any;
  constructor(private loanService:LoanApplicationService,private router:Router, private actRoute:ActivatedRoute) { 
    this.email=this.actRoute.snapshot.params['email'];
    console.log("email="+this.email);
  }

  ngOnInit(): void {
    this.loanService.viewApprovedLoanApplicationByEmail(this.email).subscribe(resp=>{
      if(resp==null){
        alert("No Approved Loan Applications found")
      }
      console.log(resp);
      this.loanApplications=resp;
    },error=>{
      console.log(error);
    });
  }

  

}
