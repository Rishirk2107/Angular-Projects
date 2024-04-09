import { Component } from '@angular/core';

@Component({
  selector: 'app-template-driven-form',
  templateUrl: './template-driven-form.component.html',
  styleUrls: ['./template-driven-form.component.css']
})
export class TemplateDrivenFormComponent {

  onSubmit(form: any) {
    if (form.valid) {
      console.log('Form submitted:', form.value);
    }
  }

}
