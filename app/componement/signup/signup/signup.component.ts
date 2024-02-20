
import { ChangeDetectorRef, Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { IButtonGroupEventArgs, IgxStepperComponent } from 'igniteui-angular';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {
  public linear = false;

  public user: any = {
      fullName: '',
      email: '',
      city: '',
      street: '',
      city2: '',
      street2: '',
      payment: ''
  };

  public paymentTypes: string[] = [
      'PayPal (n@mail.com; 18/02/2021)',
      'Visa (**** **** **** 1234; 12/23)',
      'MasterCard (**** **** **** 5678; 12/24)'
  ];

  public modes: any[] = [
      {
          label: 'Linear', linear: true,
          selected: this.linear === true, togglable: true
      },
      {
          label: 'Non Linear', linear: false,
          selected: this.linear === false, togglable: true
      }
  ];

  public toggleModes(event: IButtonGroupEventArgs): void {
      this.linear = this.modes[event.index].linear;
  }
}
