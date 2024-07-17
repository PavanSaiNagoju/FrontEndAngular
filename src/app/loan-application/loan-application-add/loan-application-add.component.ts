import { getLocaleDateTimeFormat } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserDetails } from 'src/app/user-details/user-details';
import { LoanApplication } from '../loan-application';
import { LoanApplicationService } from '../loan-application.service';
import { DatePipe } from '@angular/common'


@Component({
  selector: 'app-loan-application-add',
  templateUrl: './loan-application-add.component.html',
  styleUrls: ['./loan-application-add.component.css']
})
export class LoanApplicationAddComponent implements OnInit {
  

  doorNo: string='';
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
  newLoanApplication:LoanApplication =new LoanApplication(this.doorNo, this.existingEMI, this.tenure, this.interest, this.amount,
    this.appdate, this.status, this.user);
  
  constructor(private loanService:LoanApplicationService ,private router:Router,private actRoute: ActivatedRoute, dPipe: DatePipe) { 
    this.newLoanApplication.interest=this.actRoute.snapshot.params['interest'];
    console.log("interest="+this.newLoanApplication.interest);
    this.userId=this.actRoute.snapshot.params['userId'];
    console.log("userId="+this.userId);
    this.email=this.actRoute.snapshot.params['email'];
    console.log("email="+this.email);

}

  ngOnInit(): void {
    console.log("console");
   // var newLoanApplicationDate=this.datepipe.transform(this.appdate,"d/M/yy");
  }
  submitAddForm(){
    this.loanService.addLoanApplication(this.newLoanApplication,this.userId).subscribe(resp=>{
     if(this.loanService.showLoanAppsBydoorNo(this.newLoanApplication.doorNo)!=null){ console.log(resp);
      alert("Thank you for applying for your loan, Your loan Application is submitted for review, Please check the status of your loan application later");
      this.router.navigate(['/loan-application-submit',this.userId,this.email]);}
    },error=>{
      if(error){
        alert("Please enter correct details")
      }
      console.log(error);
    });
    
  }
  returnToHome(){
    this.router.navigate(['/loan-application-list']);
  }

}
