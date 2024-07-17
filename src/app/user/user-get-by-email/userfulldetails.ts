import { UserDetails } from 'src/app/user-details/user-details';

export class UserFullDetails{
    email:string;
    age:number;
    gender:string;
    mobile:string;
    name:string;
    password:string;
    userdetails:UserDetails;
    constructor(email:string,age:number,gender:string,mobile:string,name:string,password:string,userdetails:UserDetails)
{
    this.email=email;
    this.age=age;
    this.gender=gender;
    this.mobile=mobile;
    this.name=name;
    this.password=password;
    this.userdetails=userdetails;
}
 
}