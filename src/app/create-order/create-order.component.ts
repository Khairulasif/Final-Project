import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { PostService } from '../view-order/post.service';


@Component({
  selector: 'app-create-order',
  templateUrl: './create-order.component.html',
  styleUrls: ['./create-order.component.css']
})
export class CreateOrderComponent implements OnInit{

  form2 !: FormGroup;

  constructor(public services: PostService, private router: Router){}


  ngOnInit(): void {

    this.form2 = new FormGroup({
      buyersName: new FormControl(),
      email:new FormControl(),
      phone:new FormControl(),
      address:new FormControl(),
      buyersId:new FormControl(),
      orderId:new FormControl(),
      orderItem:new FormControl(),
      itemSize:new FormControl(),
      orderType:new FormControl(),
      itemAmount:new FormControl(),
      orderStatus:new FormControl(),
      orderReceiveDate:new FormControl(),
      orderDeliveryDate:new FormControl(),
    })
  }

  submit() {
    console.log(this.form2.value);
    this.services.addTask(this.form2.value).subscribe((res:any) => {
      console.log('Post created successfully');
      this.router.navigateByUrl('vieworder');
    })

}
}
