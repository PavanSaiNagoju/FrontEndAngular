import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-functionalities',
  templateUrl: './admin-functionalities.component.html',
  styleUrls: ['./admin-functionalities.component.css']
})
export class AdminFunctionalitiesComponent implements OnInit {

  constructor(private router: Router) { }
 
  ngOnInit(): void {
  }
 
  getAllApproved(): any{
    console.log("get all approved");
    this.router.navigate(['/admin-loan-application-approved']);
    
  }
 
  getAllRejected(): any{
    console.log("get all rejected");
    this.router.navigate(['/admin-loan-application-rejected']);
  }
 
  getAllPending(): any{
    console.log("get all pending");
    this.router.navigate(['/approve-loans']);
  }
 
  showAllUsers(): any{
    console.log("show all users");
    this.router.navigate(['/admin-show-all-users']);
 
  }
 
  getAccountDetails():any{
    console.log("EMI, ACCOUNT");
    this.router.navigate(['/view-account-details']);
 
  }
  home(){
    this.router.navigate(['']);
  }
 
}