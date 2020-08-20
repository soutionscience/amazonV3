import { Injectable, NgZone } from '@angular/core';
import {auth } from 'firebase/app'
import {AngularFireAuth} from '@angular/fire/auth'
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private afAuth: AngularFireAuth, 
    private ngZone: NgZone,
    private router: Router ) { }

  singIN(email, password){
    return this.afAuth.signInWithEmailAndPassword(email, password)
    .then((result)=>{
      this.ngZone.run(()=>{
        this.router.navigate(['/'])
    
      })

    }).catch((error)=>{
      window.alert(error.message)
    })

  }
  SignUp(email, password){
    return this.afAuth.createUserWithEmailAndPassword(email, password)
    .then((result)=>{
      console.log(result.user)
    }).catch((error)=>{
      window.alert(error.message)
    })
  }
}
