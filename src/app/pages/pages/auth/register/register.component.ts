import { ChangeDetectorRef, Component, OnInit } from "@angular/core";
import icVisibility from "@iconify/icons-ic/twotone-visibility";
import icVisibilityOff from "@iconify/icons-ic/twotone-visibility-off";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { fadeInUp400ms } from "../../../../../@vex/animations/fade-in-up.animation";
import { AuthService } from "src/app/auth.service";
import { LoginData } from "src/app/interfaces/login-data.interface";

@Component({
  selector: "vex-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.scss"],
  animations: [fadeInUp400ms],
})
export class RegisterComponent implements OnInit {
  error: string | null = null;

  form: FormGroup;

  inputType = "password";
  visible = false;

  icVisibility = icVisibility;
  icVisibilityOff = icVisibilityOff;

  constructor(
    private readonly router: Router,
    private fb: FormBuilder,
    private cd: ChangeDetectorRef,
    private readonly authService: AuthService
  ) {}

  ngOnInit() {
    this.form = this.fb.group({
      name: ["", Validators.required],
      email: ["", [Validators.required, Validators.email]],
      password: ["", [Validators.required, Validators.minLength(6)]],
      passwordConfirm: [""],
    });
  }

  send() {
    console.log(this.form.value);
    const data: LoginData = {
      email: this.form.value.email,
      password: this.form.value.password,
      name: this.form.value.name,
    };

    const register = async () => {
      await this.authService.register(data).catch((e) => {
        this.error = e.message;
        alert(e.message);
        console.log(e);
        if (e.message === "💥這個 email 已經登記，請直接登入!💥") {
          this.router.navigate(["/login"]);
        }
      });
    };

    register();
    this.authService.SetUserData().subscribe(() => {
      console.log("save userData");
      this.router.navigate(["/apps/aio-table"]);
    });
  }

  toggleVisibility() {
    if (this.visible) {
      this.inputType = "password";
      this.visible = false;
      this.cd.markForCheck();
    } else {
      this.inputType = "text";
      this.visible = true;
      this.cd.markForCheck();
    }
  }
}
