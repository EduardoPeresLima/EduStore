import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';

@Component({
    selector: 'app-register-user-main-info',
    templateUrl: './register-user-main-info.component.html',
    styleUrls: ['./register-user-main-info.component.scss']
})
export class RegisterUserMainInfoComponent {
    @Output() finishForm = new EventEmitter();

    mainDataFormGroup: FormGroup;
    constructor(
        private formBuilder: FormBuilder,
        private messageService: MessageService,
    ) {
        this.mainDataFormGroup = this.formBuilder.group({
            fullName: [null, [Validators.required, Validators.minLength(1), Validators.maxLength(50)]],
            phoneNumber: [null, [Validators.required]],
            birthDate: [null, [Validators.required]],
            email: [null, [Validators.required, Validators.maxLength(320), Validators.email]],
            password: [null, [Validators.required, Validators.maxLength(50)]],
            confirmPassword: [null, [Validators.required, Validators.maxLength(50)]],
        });
    }

    continueRegisterUserForm() {
        if(this.mainDataFormGroup.invalid){
            this.messageService.add({
                severity: 'error',
                summary: 'Invalid Form', 
                detail: 'The form is invalid'
            })
        }
        else{
            const formData = this.mainDataFormGroup.value
            console.log(formData)
            // let mainData = {
                
            // }
            this.finishForm.emit()
        }
    }
}
