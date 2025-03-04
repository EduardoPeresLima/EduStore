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
                    this.messageService.add({
                        severity: 'success',
                        summary: 'User logged successfully!',
                        detail: ''
                    })
                    this.router.navigate(['/home'])
                },
                error: (response) => {
                    let status_code : number = response.status
                    let error_detail_toast : string = ""
                    if(status_code == 0)
                        error_detail_toast = "Can't reach backend server"
                    else if(status_code == 401)
                        error_detail_toast = 'User or password is incorrect'
                    else if (status_code == 500)
                        error_detail_toast = 'Internal server error'
                    else
                        error_detail_toast = 'Unknown error'
                    this.messageService.add({
                        severity: 'error',
                        summary: 'Error on Login',
                        detail: error_detail_toast
                    })
                }
            })
        }
    }
}
