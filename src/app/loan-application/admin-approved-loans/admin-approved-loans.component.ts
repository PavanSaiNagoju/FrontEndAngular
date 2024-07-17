import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoanApplicationService } from '../loan-application.service';

@Component({
  selector: 'app-admin-approved-loans',
  templateUrl: './admin-approved-loans.component.html',
  styleUrls: ['./admin-approved-loans.component.css']
})
export class AdminApprovedLoansComponent implements OnInit {

  loanApporvedArray: any;
 
  constructor(private loanapplicationService: LoanApplicationService, private router: Router) { }
 
  ngOnInit(): void {
    this.loanapplicationService.getAllApproved().subscribe((Response:any)=>{
      console.log(Response);
      this.loanApporvedArray=Response;
    })
  }
  goBack(): any {
    this.router.navigate(['/admin-functionality']);
  }
 
}

