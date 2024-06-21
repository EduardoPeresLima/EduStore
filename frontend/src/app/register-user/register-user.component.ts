import { Component } from '@angular/core';

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

    registerStep: RegisterStep = RegisterStep.UserAddress
    setRegisterStep(event:any, newRegisterStep: RegisterStep) {
        console.log(event)
        this.registerStep = newRegisterStep
    }

}
