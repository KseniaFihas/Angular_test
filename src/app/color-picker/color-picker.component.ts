import { Component, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-color-picker',
  templateUrl: './color-picker.component.html',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => ColorPickerComponent),
      multi: true,
    },
  ],
})
export class ColorPickerComponent implements ControlValueAccessor {
  selectedColor: string = 'grey';

  private onChange: any = () => {};
  private onTouched: any = () => {};

  constructor() {}

  writeValue(value: any): void {
    if (value) {
      this.selectedColor = value;
    }
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  updateColor(passwordStrength: string) {
    switch (passwordStrength) {
      case 'empty':
        this.selectedColor = 'grey';
        break;
      case 'weak':
        this.selectedColor = 'red';
        break;
      case 'medium':
        this.selectedColor = 'yellow';
        break;
      case 'strong':
        this.selectedColor = 'green';
        break;
      default:
        this.selectedColor = 'grey';
    }

    this.onChange(this.selectedColor);
  }
}