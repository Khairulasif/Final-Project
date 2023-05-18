import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ReqPassServiceService } from './req-pass-service.service';

@Component({
  selector: 'app-req-password',
  templateUrl: './req-password.component.html',
  styleUrls: ['./req-password.component.css']
})
export class ReqPasswordComponent implements OnInit{

  form2 !: FormGroup;

  data !: any;

  id !: number;

  constructor(public services: ReqPassServiceService, private router: Router){}


  ngOnInit(): void {

    this.form2 = new FormGroup({
    
    email:new FormControl(),

})

  }

  submit() {
    console.log(this.form2.value.email);
    this.services.find(this.form2.value.email).subscribe((res:any) => {
      this.data = res;
      console.log(this.data);

      if(this.data != null) {

        this.id = this.data.id;
        console.log(this.id);

        this.navigateToComponent(this.id);
        // this.router.navigateByUrl('employeeList/');
      }
      
      
    })

}

 navigateToComponent(id: number) {
  this.router.navigate(['/changePass/', id]);
}

}




