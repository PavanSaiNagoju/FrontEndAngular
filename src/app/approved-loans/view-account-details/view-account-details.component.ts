import { Component, OnInit } from '@angular/core';
import { ApprovedLoansService } from '../approved-loans.service';

@Component({
  selector: 'app-view-account-details',
  templateUrl: './view-account-details.component.html',
  styleUrls: ['./view-account-details.component.css']
})
export class ViewAccountDetailsComponent implements OnInit {

  approveLoans: any[]=[] ;
  constructor(private approveService:ApprovedLoansService) { }
 
  ngOnInit(): void {
    this.reloadData();
  }
  reloadData()
  {
    this.approveService.getAppprovedLoans().subscribe((response:any)=>{console.log(response);
      this.approveLoans=response});
  }}