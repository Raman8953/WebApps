import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import {Validators} from '@angular/forms'
import { Router } from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  submitted = false;

  profileForm = this.fb.group({
    f_name: ['',Validators.required],
    l_name: ['',Validators.required],
    Email : ['',[Validators.required,Validators.email]],
    password :['',[Validators.required,Validators.minLength(6)]],
  });

  constructor(private fb: FormBuilder,private router:Router) { }

get f_name() {return this.profileForm.get('f_name')}

get l_name() {return this.profileForm.get('l_name')}

get Email() {return this.profileForm.get('Email')}

get password() {return this.profileForm.get('password')}

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.profileForm.invalid) {
        return;
    }

    alert('SUCCESSFULLY  REGISTERED!! :-)')
    this.router.navigateByUrl('/login')
}

  ngOnInit(): void {
  }

}
