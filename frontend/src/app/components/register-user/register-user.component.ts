import { Component } from '@angular/core';
import { BuyerService } from 'src/app/services/buyer/buyer.service';
import { BuyerCreate } from 'src/app/interfaces/buyer';
import { AddressCreateWithBuyer } from 'src/app/interfaces/address';
import { AuthService } from 'src/app/services/auth/auth.service';
import { MessageService } from 'primeng/api';
import { Router } from '@angular/router';

enum RegisterStep {
    UserMainData,
    UserAddress
}

@Component({
    selector: 'app-register-user',
    templateUrl: './register-user.component.html',
    styleUrls: ['./register-user.component.scss']
})
export class RegisterUserComponent {
    RegisterStep = RegisterStep;

    userData : any = {};
    
    // registerStep: RegisterStep = RegisterStep.UserAddress
    registerStep: RegisterStep = RegisterStep.UserMainData

    constructor(
        private buyerService: BuyerService,
        private authService: AuthService,
        private messageService: MessageService,
        private router: Router
    ){}

    setRegisterStep(event:any, newRegisterStep: RegisterStep) {
        this.userData = event;
        this.registerStep = newRegisterStep
    }
    finishUserRegistration(event: any){
        let buyer : BuyerCreate = {
            name: this.userData.fullName,
            primary_email : this.userData.email,
            primary_phone_number: this.userData.phoneNumber,
            password: this.userData.password
        }
        let address : AddressCreateWithBuyer = {
            postal_code: event.postalCode,
            country: event.country,
            state: event.state,
            city: event.city,
            street: event.street,
            residence_number: event.number,
        }
        this.authService.createBuyerWithAddress(buyer, address).subscribe({
            next: (response:any) => {
                this.messageService.add({
                    severity: 'success',
                    summary: 'User created successfully!',
                    detail: ''
                })
                this.router.navigate(['/login'])
            },
            error: (response:any) => {
                let status_code : number = response.status
                let error_detail_toast : string = ""

                if(status_code == 0)
                    error_detail_toast = "Can't reach backend server"
                else if (status_code == 409)
                    error_detail_toast = 'E-mail already in use'
                else if (status_code == 500)
                    error_detail_toast = 'Internal server error'
                else
                    error_detail_toast = 'Unknown error'
                this.messageService.add({
                    severity: 'error',
                    summary: 'Error on Register',
                    detail: error_detail_toast
                })
            }
        })
        
        // private buyerService: BuyerService
    }

}
