import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {AuthService} from '../../SERVICES/auth.service'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(private fb: FormBuilder, private auth: AuthService) { }

  ngOnInit(): void {
    this.createForm()
  }

  createForm(){
    this.loginForm = this.fb.group({
      email: [''],
      password: ['']
    })
  }

  signIn(){
  
  this.auth.singIN(this.loginForm.value.email, this.loginForm.value.password)
  }
  createAccout(){
   this.auth.SignUp(this.loginForm.value.email, this.loginForm.value.password)

  }

}
