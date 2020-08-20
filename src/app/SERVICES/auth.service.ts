import { Injectable, NgZone } from '@angular/core';
import {auth } from 'firebase/app'
import {AngularFireAuth} from '@angular/fire/auth'
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  userData: any;

  constructor(private afAuth: AngularFireAuth, 
    private ngZone: NgZone,
    private router: Router ) { 
      this.afAuth.authState.subscribe(user=>{
        if(user){
          this.userData = user;
          localStorage.setItem('user', JSON.stringify(this.userData))
          JSON.parse(localStorage.getItem('user'))
        }else{
          localStorage.setItem('user', null)
          JSON.parse(localStorage.getItem('user'))
        }
      })
    }

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
  logOut(){
    console.log('log out')
    return this.afAuth.signOut()
  }
  isLoggedIn(): boolean{
    const user  = JSON.parse(localStorage.getItem('user'));
    return user? true:false 
  }
  getUser(){
    const user  = JSON.parse(localStorage.getItem('user'));
    return user? user:null 

  }
}
