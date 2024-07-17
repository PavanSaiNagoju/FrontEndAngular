import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoanApplication } from '../loan-application/loan-application';

@Injectable({
  providedIn: 'root'
})
export class ApprovedLoansService {

  

  
  constructor(private http:HttpClient) { }
  getPendingList(): any{  
    return this.http.get("http://localhost:8081/api/homeloan/loanapplications/pendingloans");  
  }  
  add(loans:LoanApplication):any{
    
    return this.http.put("http://localhost:8081/api/homeloan/loanapplications",loans);
  }
  rejectApplication(loan:LoanApplication)
  {
    return this.http.put("http://localhost:8081/api/homeloan/loanapplications",loan);
  }

  getAppprovedLoans():any
  {
    return this.http.get("http://localhost:8081/api/homeloan/loans");
  }

  getUserAppprovedLoans(email:string):any
  {
    return this.http.get("http://localhost:8081/api/homeloan/approvedloans/"+email);
  }

}
