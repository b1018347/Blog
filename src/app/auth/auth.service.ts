import * as firebase from 'firebase';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
@Injectable()
export class AuthService {

    token: string;
    error = new Subject<string>();
    constructor(private router: Router) {
    }

    signinUser(email: string, password: string) {
        return firebase.auth().signInWithEmailAndPassword(email, password)
        .then(
            response => {
                this.router.navigate(['/']);
                firebase.auth().currentUser.getToken()
                  .then(
                    (token: string) =>{
                        this.token = token
                    } 
                  )
              }
        ).catch(
            error =>{
                this.error.next(error.message);
            }
        );
    }

    
    getToken() {
        firebase.auth().currentUser.getToken()
        .then(
            (token: string) => this.token = token
        );
        return this.token;
    }

    isAuthenticated() {
        return this.token != null;
    }

    logout() {
        firebase.auth().signOut();
        this.token = null;
        this.router.navigate(['/']);
      }

}

