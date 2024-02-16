import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register-buyer',
  templateUrl: './register-buyer.component.html',
  styleUrls: ['./register-buyer.component.scss']
})
export class RegisterBuyerComponent {
    
    buyerForm = new FormGroup({
        name: new FormControl('', [Validators.required]),
        password: new FormControl('', [Validators.required]),
        confirm_password: new FormControl('', [Validators.required]),
        primary_email: new FormControl('', [Validators.required]),
        primary_phone_number: new FormControl('', [Validators.required]),
    })

    registerBuyer(){

    }
}
