import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from '../auth.service';
import { NgForm } from '@angular/forms';
import { slideIn } from '../../shared/animations/slide-in.animation';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css'],
  animations: [slideIn]
})
export class SigninComponent implements OnInit, OnDestroy {

  constructor(private authService: AuthService) { }
  errorSub: Subscription;
  errorMessage: string = '';
    ngOnInit() {
      this.errorSub = this.authService.error.subscribe
        (
          (error: string) => {
            this.errorMessage = error;
          }
        )
    }

    ngOnDestroy() {
      this.errorSub.unsubscribe();
    }
  
    onSignin(form: NgForm) {
      const email = form.value.email;
      const password = form.value.password;
      this.authService.signinUser(email, password);
    }

    onErrorDismiss() {
      this.errorMessage = '';
    }
  
}
