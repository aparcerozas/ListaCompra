import { Injectable } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';
import {auth} from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class ServicioDeAutentService {

  email = '';
  pass = '';
  authUser = null;

  constructor(public miauth: AngularFireAuth) { }

  user = this.miauth.authState;

  login() {
    console.log('github login!');
    this.miauth.auth.signInWithPopup( new auth.GithubAuthProvider())
      .then( user => {
        console.log('user logado: ', user);
        this.email = '';
        this.pass = '';
        this.authUser = user.user;
      })
      .catch( error => {
        console.log('error en github login: ', error);
      });
  }
  glogin() {
    console.log('google login!');
    this.miauth.auth.signInWithPopup( new auth.GoogleAuthProvider())
      .then( user => {
        console.log('user logado: ', user);
        this.email = '';
        this.pass = '';
        this.authUser = user.user;
      })
      .catch( error => {
        console.log('error en google login: ', error);
      });
  }
  logout() {
    console.log('logout!');
    this.miauth.auth.signOut();
  }

}
