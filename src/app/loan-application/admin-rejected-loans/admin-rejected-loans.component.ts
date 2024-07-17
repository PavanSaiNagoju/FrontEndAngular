import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoanApplicationService } from '../loan-application.service';

@Component({
  selector: 'app-admin-rejected-loans',
  templateUrl: './admin-rejected-loans.component.html',
  styleUrls: ['./admin-rejected-loans.component.css']
})
export class AdminRejectedLoansComponent implements OnInit {

  loanRejectedArray : any;
  constructor(private loanapplicationrejectedService: LoanApplicationService,
               private router: Router) { }
 
  ngOnInit(): void {
 
    this.loanapplicationrejectedService.getAllRejected().subscribe((Response: any)=>{
      console.log(Response);
      this.loanRejectedArray=Response;
    })
  }
 
  goBack(): any {
    this.router.navigate(['/admin-functionality']);
  }
}