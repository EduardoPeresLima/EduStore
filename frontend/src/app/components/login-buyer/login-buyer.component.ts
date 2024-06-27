import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
    selector: 'app-login-buyer',
    templateUrl: './login-buyer.component.html',
    styleUrls: ['./login-buyer.component.scss']
})
export class LoginBuyerComponent {

    loginBuyerFormGroup: FormGroup;
    get form() { return this.loginBuyerFormGroup.controls }

    constructor(
        private formBuilder: FormBuilder,
        private messageService: MessageService,
        private authService: AuthService,
        private router: Router
    ) {
        this.loginBuyerFormGroup = this.formBuilder.group({
            email: [null, [Validators.required, Validators.maxLength(320), Validators.email]],
            password: [null, [
                Validators.required,
                Validators.minLength(8)
            ]],
        });
    }

    finishLoginBuyer() {
        if (this.loginBuyerFormGroup.invalid) {
            this.messageService.add({
                severity: 'error',
                summary: 'Invalid Form',
                detail: 'The form is invalid'
            })
        }
        else {
            const formData = this.loginBuyerFormGroup.value
            this.authService.loginBuyer(formData).subscribe({
                next: (response) => {
                    this.authService.setToken(response.access_token)
                    this.authService.setUserData(response.user_data)
                    this.router.navigate(['/home'])
                },
                error: (response) => {
                    this.messageService.add({
                        severity: 'error',
                        summary: 'Error on Login',
                        detail: ''
                    })
                }
            })
            console.log(formData)
        }
    }
}
