import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserDetails } from 'src/app/user-details/user-details';
import { LoanApplication } from '../loan-application';
import { LoanApplicationService } from '../loan-application.service';

@Component({
  selector: 'app-loan-application-pending-edit',
  templateUrl: './loan-application-pending-edit.component.html',
  styleUrls: ['./loan-application-pending-edit.component.css']
})
export class LoanApplicationPendingEditComponent implements OnInit {
originalLoan:any;

  

  
 
  
email:string='';
userId:number=0;
  

    constructor(private loanService:LoanApplicationService ,private router:Router,private actRoute: ActivatedRoute) {
      /*this.router.getCurrentNavigation()?.extras.state;
      this.email=this.actRoute.snapshot.params.email;
      this.router.getCurrentNavigation()?.extras.state;
      this.userId=this.actRoute.snapshot.params.userId;*/
    console.log("email="+this.email);
     }
     ngOnInit(): void {
      /*this.actRoute.data.subscribe(data=> {
        this.originalLoan=data;
      })*/
      

      this.originalLoan=history.state;
      //this.updatedLoanApplication=this.originalLoan;
      //console.log(this.updatedLoanApplication);
    }
  doorNo: string=history.state.originalLoan.doorNo;
  existingEMI: number=history.state.originalLoan.existingEMI;
  tenure: number=history.state.originalLoan.tenure;
  interest:number=history.state.originalLoan.interest;
  amount:number=history.state.originalLoan.amount;
  appdate:string=history.state.originalLoan.appdate;
  status:string=history.state.originalLoan.status;
  
  user:UserDetails=history.state.originalLoan.user;
  updatedLoanApplication:LoanApplication =new LoanApplication(this.doorNo, this.existingEMI, this.tenure, this.interest, this.amount,
    this.appdate, this.status,this.user);
    
    submitEditForm(){
      this.loanService.updateLoanApplication(this.updatedLoanApplication).subscribe(resp=>{
        console.log(resp);
        if(resp!=null){
          alert("Edit Succesful");
        }
        if(resp==null){
          alert("No Pending Loan Applications found")
        }
      },error=>{
        if(error){
          alert("Please enter correct details")
        }
        console.log(error);
      });
      //
    this.router.navigate(['/loan-application-submit',this.userId,this.email]);
    }

}
