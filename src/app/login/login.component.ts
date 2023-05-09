import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { PostService } from '../post.service';
import { modelType } from './model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private services:PostService){}

  postList: modelType[] = [];

  form2!: FormGroup;







  ngOnInit(): void {

    this.form2 = new FormGroup({
      user: new FormControl(),
      password: new FormControl(),
    })
  }

  submit() {

   console.log(this.form2.value)
  }
}
