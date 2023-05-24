import { Time } from "@angular/common";

export interface modelType{
    id:number;
    empId:number;
    name:string;
    date:Date;
    signIn:Time;
    signOut:Time;
    workingHour:Time;
    status:string;
    department:string;
    designation:string;
    
  }
  