import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AddressCreateWithBuyer } from 'src/app/interfaces/address';
import { BuyerCreate } from 'src/app/interfaces/buyer';

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    constructor(
        private http: HttpClient
    ) { }
    private URL = 'http://localhost:8000'
    private authURL = this.URL + "/auth";

    httpOptionsJson = {
        headers: new HttpHeaders({
            //   'Content-Type': 'application/json',
            //   'Authorization': `Bearer ${this.authService.getDataInLocalStorage('token')}`
        })
    }
    createBuyerWithAddress(buyerData: BuyerCreate, addressData: AddressCreateWithBuyer) {
        const url = `${this.authURL}/buyer_with_address`
        return this.http.post<any>(url, { 'buyer': buyerData, 'address': addressData }, this.httpOptionsJson,);
    }
}
