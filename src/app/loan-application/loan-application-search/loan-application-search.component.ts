import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserDetails } from 'src/app/user-details/user-details';
import { LoanApplication } from '../loan-application';
import { LoanApplicationService } from '../loan-application.service';

@Component({
  selector: 'app-loan-application-search',
  templateUrl: './loan-application-search.component.html',
  styleUrls: ['./loan-application-search.component.css']
})
export class LoanApplicationSearchComponent implements OnInit {

  doorNo:string="";

  existingEMI: number=0;
  tenure: number=0;
  interest:number=0;
  amount:number=0;
  appdate:string='';
  status:string='Pending';
  
  
  email:string="";
  userId:number=0;
    address:      string='';
    state:        string='';
    city:         string='';
    pin:          string='';
    emptype:      string='';
    salary:       number=0;
    aadhar:       string='';
    pan:          string='';
    salarySlip:   string='';
    addressProof: string='';
    
    
  user:UserDetails=new UserDetails(this.userId, this.address, this.state, this.city, this.pin, this.emptype, this.salary, this.aadhar,this.pan, this.salarySlip, this.addressProof);
  loanApp:LoanApplication =new LoanApplication(this.doorNo, this.existingEMI, this.tenure, this.interest, this.amount,
    this.appdate, this.status, this.user);
  loan:any;
    constructor(private loanService:LoanApplicationService,private router:Router,private actRoute:ActivatedRoute) {
      this.doorNo=this.actRoute.snapshot.params['doorNo'];
    console.log("doorNo="+this.doorNo);
     }
  ngOnInit(): void {
   
    {
    this.loanService.viewLoanApplicationBydoorNo(this.doorNo).subscribe(resp=>{
      console.log(resp);
      this.loan=resp;
      this.loanApp=this.loan;
      if(resp==null){
        alert("No Loan Applications found with this DoorNo Number");
      }
    },error=>{
      console.log(error);
    });
  }
  }
  ngAfterContentChecked(): void{
    }


}