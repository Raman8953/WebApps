import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  public myApp:object = [
    {pname:'lux', p_desc:"good product",p_id:101,p_review:"Good"},
    {pname:'luxd', p_desc:"good product",p_id:102,p_review:"Good"},
    {pname:'luxs', p_desc:"good product",p_id:103,p_review:"Good"},
    {pname:'luxd', p_desc:"good product",p_id:104,p_review:"Good"},
    {pname:'luxa', p_desc:"good product",p_id:105,p_review:"Good"},
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
