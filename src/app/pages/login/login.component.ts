import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './login.component.html'
})
export class LoginComponent {
  private readonly formBuilder = inject(FormBuilder);
  private readonly router = inject(Router);

  errorMessage = '';

  readonly loginForm = this.formBuilder.nonNullable.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(8)]]
  });

  submit(){
    if (this.loginForm.invalid) {
      this.loginForm.markAllAsTouched();
      this.errorMessage = 'Please enter a valid email and a password of at least 8 characters.';
      return;
    }

    this.errorMessage = '';
    localStorage.setItem('demo-authenticated', 'true');
    this.router.navigate(['/dashboard']);
  }
}