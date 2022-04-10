import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import icVisibility from '@iconify/icons-ic/twotone-visibility';
import icVisibilityOff from '@iconify/icons-ic/twotone-visibility-off';
import { fadeInUp400ms } from '../../../../../@vex/animations/fade-in-up.animation';
import { AuthService } from 'src/app/auth.service';
import { LoginData } from 'src/app/interfaces/login-data.interface';

@Component({
  selector: 'vex-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  // changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    fadeInUp400ms
  ]
})
export class LoginComponent implements OnInit {

  error: string | null = null;

  form: FormGroup;

  inputType = 'password';
  visible = false;

  icVisibility = icVisibility;
  icVisibilityOff = icVisibilityOff;

  constructor(private readonly router: Router,
              private fb: FormBuilder,
              private cd: ChangeDetectorRef,
              private snackbar: MatSnackBar,
              private readonly authService: AuthService,
  ) {}

  ngOnInit() {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  loginWithGoogle() {
    this.authService
      .loginWithGoogle()
      .then(() => {
        // this.authService.SetUserData();
        this.router.navigate(['/apps/aio-table'])
      })
      .catch((e) => {
        this.error = e.message;
        alert(e.message);
        console.log(e)
      });
  }

  send() {
    console.log(this.form.value);
    const data: LoginData = {
      email: this.form.value.email,
      password: this.form.value.password,
      name: this.form.value.name,
    };
    this.authService
      .login(data)
      .then(() => {
        this.router.navigate(["/apps/aio-table"]);
      })
      .catch((e) => {
        this.error = e.message;
        alert(e.message);
        if (e.message === "💥這個 email 沒有登記！請先注冊。💥") {
          this.router.navigate(["/register"]);
        }
      });
  }

  toggleVisibility() {
    if (this.visible) {
      this.inputType = 'password';
      this.visible = false;
      this.cd.markForCheck();
    } else {
      this.inputType = 'text';
      this.visible = true;
      this.cd.markForCheck();
    }
  }
}
