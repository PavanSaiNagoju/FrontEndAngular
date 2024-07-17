import { UserDetails } from '../user-details/user-details';

export class LoanApplication{
  doorNo: string;
  existingEMI: number;
  tenure: number;
  interest:number;
  amount:number;
  appdate:string;
  status:string;
  user:UserDetails;

    constructor(doorNo:string, existingEMI:number, tenure:number, interest:number, amount:number,
        appdate:string, status:string, user:UserDetails) {
    
    this.doorNo = doorNo;
    this.existingEMI = existingEMI;
    this.tenure = tenure;
    this.interest = interest;
    this.amount = amount;
    this.appdate = appdate;
    this.status = status;
    this.user = user;

}
}


