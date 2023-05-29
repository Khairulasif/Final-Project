import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { AllowanceServiceService } from './allowance-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { modelEmpInf } from './modelEmpInformation';

@Component({
  selector: 'app-allowance',
  templateUrl: './allowance.component.html',
  styleUrls: ['./allowance.component.css']
})
export class AllowanceComponent implements OnInit{

  
  id!: number;

  form2 !: FormGroup;

  empInf!: modelEmpInf;

  constructor(private services: AllowanceServiceService,
    private route: ActivatedRoute,
    private router: Router
  ) { }


  ngOnInit(): void {

    this.id = this.route.snapshot.params['postIds'];
    this.services.find(this.id).subscribe((task: modelEmpInf) => {
      this.empInf = task
      console.log('------------------------', this.empInf)
   
    });

}
}

