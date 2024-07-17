import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoanApplicationService } from '../loan-application.service';

@Component({
  selector: 'app-loan-application-rejected-user',
  templateUrl: './loan-application-rejected-user.component.html',
  styleUrls: ['./loan-application-rejected-user.component.css']
})
export class LoanApplicationRejectedUserComponent implements OnInit {
  email:string="";
  loanApplications:any;
    constructor(private loanService:LoanApplicationService,private router:Router,private actRoute:ActivatedRoute) {
      this.email=this.actRoute.snapshot.params['email'];
    console.log("email="+this.email);
     }
  ngOnInit(): void {
    this.loanService.viewRejectedLoanApplicationByEmail(this.email).subscribe(resp=>{
      console.log(resp);
      this.loanApplications=resp;
      if(resp==null){
        alert("No Rejected Loan Applications found")
      }
    },error=>{
      console.log(error);
    });
  }

}
