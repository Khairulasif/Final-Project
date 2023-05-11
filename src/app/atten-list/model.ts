import { Time } from "@angular/common";

export interface modelType{

    id:number;
    name:string;
    date:Date;
    signIn:Time;
    signOut:Time;
    workingHour:Time;
    status:string;
    
  }
  