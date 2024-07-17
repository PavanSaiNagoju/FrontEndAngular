import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { observable, Observable } from 'rxjs';
import { LoanApplication } from './loan-application';

@Injectable({
  providedIn: 'root'
})
export class LoanApplicationService {
  loanApps: LoanApplication[]=[];
  constructor(private httpClient: HttpClient) { }
  basePath:string="http://localhost:8081/api/homeloan/loanapplications"
  
  showLoanAppsBydoorNo(doorNo:string) : any{
  return this.httpClient.get(this.basePath+'/'+doorNo);
  }
   
  addLoanApplication(newLoanApp: LoanApplication, id:number):Observable<any>{
    console.log(JSON.stringify(newLoanApp));
    console.log(id);
    return this.httpClient.post(this.basePath+"/"+id,newLoanApp);
  }

  viewPendingLoanApplicationByEmail(email:string):Observable<any>{
    return this.httpClient.get(this.basePath+"/pendingloans/"+email);
  }
  viewApprovedLoanApplicationByEmail(email:string):Observable<any>{
    return this.httpClient.get(this.basePath+"/approvedloans/"+email);
    
  }
  viewRejectedLoanApplicationByEmail(email:string):Observable<any>{
    return this.httpClient.get(this.basePath+"/rejected/"+email);
  }
  updateLoanApplication(updatedLoanApp:LoanApplication):Observable<any>{
    console.log(JSON.stringify(updatedLoanApp));
    return this.httpClient.put(this.basePath,updatedLoanApp);
  }

  viewLoanApplicationBydoorNo(doorNo:string){
   return this.httpClient.get(this.basePath+'/'+doorNo);
  }

  getAllApproved():any{
    return this.httpClient.get("http://localhost:8081/api/homeloan/loanapplications/approvedloans");
  }
  getAllRejected(): any{
    
    return this.httpClient.get("http://localhost:8081/api/homeloan/loanapplications/rejectedloans");
   
    }
    
}
