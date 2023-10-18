import { Component } from '@angular/core';

@Component({
  selector: 'app-password-checker',
  templateUrl: './password-checker.component.html',
  styleUrls: ['./password-checker.component.css']
})
export class PasswordCheckerComponent {
  password = '';
  passwordStrength = '';

  checkPassword() {
    if (this.password.length === 0) {
      this.passwordStrength = 'empty';
    } else if (this.password.length < 8) {
      this.passwordStrength = 'weak';
    } else if (/[a-zA-Z]/.test(this.password) && /[0-9]/.test(this.password) && /[!@#$%^&*]/.test(this.password)) {
      this.passwordStrength = 'strong';
    } else {
      this.passwordStrength = 'medium';
    }
  }

  submitForm() {
    localStorage.setItem('password', this.password);
  alert('Password saved successfully');
  }
}