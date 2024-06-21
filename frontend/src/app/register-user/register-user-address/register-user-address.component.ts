import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';

@Component({
    selector: 'app-register-user-address',
    templateUrl: './register-user-address.component.html',
    styleUrls: ['./register-user-address.component.scss']
})
export class RegisterUserAddressComponent {
    @Output() finishForm = new EventEmitter();

    addressFormGroup: FormGroup;
    get form() { return this.addressFormGroup.controls }
    constructor(
        private formBuilder: FormBuilder,
        private messageService: MessageService,
    ) {
        this.addressFormGroup = this.formBuilder.group({
            postalCode: [null, [Validators.required]],
            country: [null, [Validators.required]],
            state: [null, [Validators.required]],
            city: [null, [Validators.required]],
            street: [null, [Validators.required]],
            number: [null, [Validators.required]]
        });
    }

    continueRegisterUserForm() {
        if (this.addressFormGroup.invalid) {
            this.messageService.add({
                severity: 'error',
                summary: 'Invalid Form',
                detail: 'The form is invalid'
            })
        }
        else {
            const formData = this.addressFormGroup.value
            this.finishForm.emit(formData)
        }
    }
}
