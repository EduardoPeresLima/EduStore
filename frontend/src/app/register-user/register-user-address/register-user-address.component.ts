import { Component, EventEmitter, Output } from '@angular/core';

@Component({
    selector: 'app-register-user-address',
    templateUrl: './register-user-address.component.html',
    styleUrls: ['./register-user-address.component.scss']
})
export class RegisterUserAddressComponent {
    @Output() finishForm = new EventEmitter();

    continueRegisterUserForm(){
        this.finishForm.emit()
    }
}
