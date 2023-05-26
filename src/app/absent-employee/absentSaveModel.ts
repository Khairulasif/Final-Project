import { Time } from "@angular/common";

export interface absentSave{

    
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