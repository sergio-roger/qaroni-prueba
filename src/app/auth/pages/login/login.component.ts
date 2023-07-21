import { Component, OnDestroy, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { Auth } from '@auth/services/auth/auth.interface';
import { AuthService } from '@auth/services/auth/auth.service';
import { UtilsService } from '@services/utils/utils.service';
import { Subject, take, takeUntil } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit, OnDestroy {
  public form!: FormGroup;
  public submit: boolean = false;
  public disabled: boolean = false;

  private unsubscribe$: Subject<any> = new Subject<any>();

  constructor(
    private formBuilder: FormBuilder,
    private utilService: UtilsService,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.initForm();
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next(null);
    this.unsubscribe$.complete();
  }

  initForm(): void {
    this.form = this.formBuilder.group({
      username: [
        '',
        [
          Validators.required,
          Validators.pattern(this.utilService.expRegular('email')),
        ],
      ],
      password: ['', [Validators.required]],
    });
  }

  sendLogin(): void {
    this.submit = true;

    if (this.form.invalid) {
      alert('Complete el formulario');
      return;
    }

    this.disabled = true;
    const credentials = this.form.value as Auth;
    this.authService
      .login(credentials)
      .pipe(take(1))
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe({
        next: (res) => {
          const token: string = res.result[0].access_token;

          localStorage.setItem('token', token);
          localStorage.setItem('email', credentials.username);

          this.form.reset();
          this.router.navigateByUrl('/groups');
        },
        error: (error) => {
          alert('Credenciales incorrectas');
          this.disabled = false;
        },
        complete: () => {},
      });
  }

  get(control: string): AbstractControl {
    return this.form.get(control) as AbstractControl;
  }
}
