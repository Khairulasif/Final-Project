import { Time } from "@angular/common";

export interface modelType{

    employeeId:number
    fname:string;
    id:number;
    empId:number;
    name:string;
    date:Date;
    signIn:Time;
    signOut:Time;
    workingHour:Time;
    
    department:string;
    designation:string;
    status:string;
    
  }