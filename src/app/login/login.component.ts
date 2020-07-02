import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder } from '@angular/forms';
import {Validators} from '@angular/forms'
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  submitted = false;

  profileForm = this.fb.group({
    Email : ['',Validators.required],
    password :['',Validators.required],
  });
  constructor(public fb : FormBuilder, private router:Router) { }

get Email() {return this.profileForm.get('Email')}

get password() {return this.profileForm.get('password')}

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.profileForm.invalid) {
        return;
    }

    alert('SUCCESS LOGIN!! :-)')
    this.router.navigateByUrl('/dashboard')
}

  ngOnInit(): void {
  }

}
