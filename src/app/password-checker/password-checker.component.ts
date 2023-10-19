import { Component, ViewChild } from '@angular/core'; 
import { FormBuilder, FormGroup } from '@angular/forms';
import { PasswordService } from '../password.service';
import Swal from 'sweetalert2';
import { ColorPickerComponent } from '../color-picker/color-picker.component'; 

@Component({
  selector: 'app-password-checker',
  templateUrl: './password-checker.component.html',
  styleUrls: ['./password-checker.component.css']
})
export class PasswordCheckerComponent {
  @ViewChild(ColorPickerComponent) colorPickerComponent!: ColorPickerComponent; 

  form!: FormGroup; 
  passwordStrength = '';

  constructor(
    private passwordService: PasswordService,
    private formBuilder: FormBuilder
  ) {
    this.form = this.formBuilder.group({
      password: [''],
      color: ['grey'],
    });
  }

  ngOnInit() {
    
  }

  checkPassword() {
    const passwordControl = this.form.get('password');
    if (passwordControl) {
      const password = passwordControl.value;
      this.passwordStrength = this.passwordService.checkPasswordStrength(password);
      this.colorPickerComponent.updateColor(this.passwordStrength); 
    }
  }

  submitForm() {
  const passwordControl = this.form.get('password');
  if (passwordControl) {
    const password = passwordControl.value;
    localStorage.setItem('password', password);
    Swal.fire('Успішно!', 'Пароль збережено в локальному сховищі.', 'success');
  }
}
}