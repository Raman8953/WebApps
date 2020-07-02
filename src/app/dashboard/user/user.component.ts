import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  public myApp:object = [
    {uname:'Raman', email:"rs123@gmail.com",u_id:101,add:"Varanasi"},
    {uname:'Shantanu', email:"ss123@gmail.com",u_id:102,add:"Lucknow"},
    {uname:'Gagan', email:"gps123@gmail.com",u_id:103,add:"Panjab"},
    {uname:'Rakesh', email:"ry123@gmail.com",u_id:104,add:"Mohali"},
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
