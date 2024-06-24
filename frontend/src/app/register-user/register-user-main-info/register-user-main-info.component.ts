import { Component, EventEmitter, Output } from '@angular/core';
import { AbstractControl, AbstractControlOptions, FormBuilder, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';

@Component({
    selector: 'app-register-user-main-info',
    templateUrl: './register-user-main-info.component.html',
    styleUrls: ['./register-user-main-info.component.scss']
})
export class RegisterUserMainInfoComponent {
    @Output() finishForm = new EventEmitter();
    submitted = false;
    mainDataFormGroup: FormGroup;
    get form() { return this.mainDataFormGroup.controls }
    constructor(
        private formBuilder: FormBuilder,
        private messageService: MessageService,
    ) {
        this.mainDataFormGroup = this.formBuilder.group({
            fullName: [null, [Validators.required, Validators.minLength(1), Validators.maxLength(50)]],
            phoneNumber: [null, [Validators.required]],
            birthDate: [null, [Validators.required]],
            email: [null, [Validators.required, Validators.maxLength(320), Validators.email]],
            password: [null, [
                Validators.required,
                Validators.minLength(8),
                this.patternValidator(new RegExp("(?=.*[0-9])"), { requiresDigit: true }),
                this.patternValidator(new RegExp("(?=.*[A-Z])"), { requiresUppercase: true }),
                this.patternValidator(new RegExp("(?=.*[a-z])"), { requiresLowercase: true }),
                this.patternValidator(new RegExp("(?=.*[$@^!%*?&])"), { requiresSpecialChars: true })
            ]],
            confirmPassword: [null, [Validators.required, Validators.minLength(8)]]
        }, {
            validators: this.matchPasswordsValidator
        });
    }

    patternValidator(regex: RegExp, error: ValidationErrors): ValidatorFn {
        return (control: AbstractControl): { [key: string]: any } | null => {
            if (!control.value)
                return null;

            const valid = regex.test(control.value);
            return valid ? null : error;
        };
    }
    matchPasswordsValidator(control: AbstractControl) {
        const password: string = control.get("password")?.value;
        const confirmPasswordControl: AbstractControl | null = control.get("confirmPassword");
        const confirmPassword: string = confirmPasswordControl?.value;

        if (!confirmPassword?.length || confirmPassword.length < 8)
            return;
        if (password !== confirmPassword)
            confirmPasswordControl?.setErrors({ mismatch: true });
        else if (confirmPasswordControl?.hasError('mismatch')) {
            delete confirmPasswordControl?.errors?.['mismatch'];
            control.updateValueAndValidity();
        }
    }
    continueRegisterUserForm() {
        if (this.mainDataFormGroup.invalid) {
            this.messageService.add({
                severity: 'error',
                summary: 'Invalid Form',
                detail: 'The form is invalid'
            })
        }
        else {
            const formData = this.mainDataFormGroup.value
            this.finishForm.emit(formData)
        }
    }
}
