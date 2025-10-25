import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  name: string = '';
  email: string = '';
  password: string = '';
  confirmPassword: string = '';
  errorMessage: string = '';
  successMessage: string = '';

  constructor(private router: Router) {}

  onRegister() {
    if (!this.name || !this.email || !this.password || !this.confirmPassword) {
      this.errorMessage = 'All fields are required!';
      this.successMessage = '';
      return;
    }

    if (this.password !== this.confirmPassword) {
      this.errorMessage = 'Passwords do not match!';
      this.successMessage = '';
      return;
    }

    const users = JSON.parse(localStorage.getItem('users') || '[]');
    const userExists = users.find((u: any) => u.email === this.email);

    if (userExists) {
      this.errorMessage = 'Email is already registered!';
      this.successMessage = '';
      return;
    }

    users.push({ name: this.name, email: this.email, password: this.password });
    localStorage.setItem('users', JSON.stringify(users));

    this.errorMessage = '';
    this.successMessage = 'Registration successful! Redirecting to login...';

    setTimeout(() => {
      this.router.navigate(['/login']);
    }, 1500);
  }
}