import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoanApplication } from 'src/app/loan-application/loan-application';
import { ApprovedLoansService } from '../approved-loans.service';

@Component({
  selector: 'app-approve-pending-loans',
  templateUrl: './approve-pending-loans.component.html',
  styleUrls: ['./approve-pending-loans.component.css']
})
export class ApprovePendingLoansComponent implements OnInit {

  loanapplications: any[]=[] ; 
 constructor(private approveService:ApprovedLoansService, private router:Router) {}
   
  // loan:LoanApplication=new LoanApplication();
 
  ngOnInit() { 
    this.reloadData() 
    
  }
  reloadData()
  {
     this.approveService.getPendingList().subscribe((response:any)=>{console.log(response);
    this.loanapplications=response});
 
  
  }  
  addApproved(loans:LoanApplication){
    this.approveService.add(loans).subscribe((response:any)=>{console.log(response);
    })
  }
  myFunc(l:LoanApplication){
    console.log("function called");
    this.approveService.add(l).subscribe((response:any)=>{console.log(response);
  
    console.log(Error);
    alert("Loan is submitted and is Approved/Rejected based on the validations meet");
    this.reloadData();
    
  });
    

  }

  rejectLoan(loan:LoanApplication)
  {
    this.approveService.rejectApplication(loan).subscribe((response:any)=>{console.log(response);
     alert("Loan Rejected");
      this.reloadData()});
  }

  back(){
    this.router.navigate(["/admin-functionality"]);
  }
 

}
