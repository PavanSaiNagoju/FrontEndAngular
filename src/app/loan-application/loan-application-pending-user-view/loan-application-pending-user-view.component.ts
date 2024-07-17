import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoanApplication } from '../loan-application';
import { LoanApplicationService } from '../loan-application.service';

@Component({
  selector: 'app-loan-application-pending-user-view',
  templateUrl: './loan-application-pending-user-view.component.html',
  styleUrls: ['./loan-application-pending-user-view.component.css']
})
export class LoanApplicationPendingUserViewComponent implements OnInit {
  loanApplications: any[]=[];
  email:string='';
  constructor(private loanService:LoanApplicationService, private router:Router, private actRoute:ActivatedRoute) { 
    this.email=this.actRoute.snapshot.params['email'];
    console.log("email="+this.email); 
  }

  ngOnInit(): void {
    this.loanService.viewPendingLoanApplicationByEmail(this.email).subscribe(resp=>{
      console.log(resp);
      this.loanApplications=resp;
    },error=>{
      console.log(error);
    });
  }

  updatePendingLoanApplicationParent(originalLoan:LoanApplication){
    this.router.navigateByUrl('/loan-application-pending-edit',{state:{originalLoan}});
  }
  
  
}
