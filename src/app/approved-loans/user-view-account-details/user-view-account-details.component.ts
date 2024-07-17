import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoanApplicationService } from 'src/app/loan-application/loan-application.service';
import { ApprovedLoansService } from '../approved-loans.service';

@Component({
  selector: 'app-user-view-account-details',
  templateUrl: './user-view-account-details.component.html',
  styleUrls: ['./user-view-account-details.component.css']
})
export class UserViewAccountDetailsComponent implements OnInit {

  approve: any[]=[];email:string="";
  constructor(private loanService:LoanApplicationService,private router:Router,private actRoute:ActivatedRoute, private approveService:ApprovedLoansService) {
    this.email=this.actRoute.snapshot.params['email'];
  console.log("email="+this.email);
   }
 
  ngOnInit(): void {
    this.reloadData();
  }
  reloadData()
  {
    this.approveService.getUserAppprovedLoans(this.email).subscribe((response:any)=>{console.log(response);
      this.approve=response}); 
 
  }
}