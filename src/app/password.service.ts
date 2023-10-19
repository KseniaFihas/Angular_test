import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PasswordService {
  checkPasswordStrength(password: string): string {
    return this.calculatePasswordStrength(password);
  }

  private calculatePasswordStrength(password: string): string {
    if (password.length === 0) {
      return 'empty';
    } else if (password.length < 8) {
      return 'weak';
    } else if (/[a-zA-Z]/.test(password) && /[0-9]/.test(password) && /[!@#$%^&*]/.test(password)) {
      return 'strong';
    } else {
      return 'medium';
    }
  }
}