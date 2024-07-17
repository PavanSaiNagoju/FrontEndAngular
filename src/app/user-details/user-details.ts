export class UserDetails
{
    userId:number;
    address:string;
    state :string;
    city :string;
    pin :string;
    emptype :string;
    salary :number;
    aadhar :string;
    pan :string;
    salarySlip :string;
    addressProof:string
    constructor( userId:number,address:string, state:string, city:string, pin:string, emptype:string,
        salary:number ,  aadhar:string, pan:string, salarySlip:string, addressProof:string) {
    
    this.userId = userId;
    this.address = address;
    this.state = state;
    this.city = city;
    this.pin = pin;
    this.emptype = emptype;
    this.salary = salary;
    this.aadhar = aadhar;
    this.pan = pan;
    this.salarySlip = salarySlip;
    this.addressProof = addressProof;
     }
}