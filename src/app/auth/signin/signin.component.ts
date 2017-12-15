import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { NgForm } from '@angular/forms';
import { slideIn } from '../../shared/animations/slide-in.animation';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css'],
  animations: [slideIn]
})
export class SigninComponent implements OnInit {

  constructor(private authService: AuthService) { }
  
    ngOnInit() {
    }
  
    onSignin(form: NgForm) {
      const email = form.value.email;
      const password = form.value.password;
      this.authService.signinUser(email, password);
    }
  
}
