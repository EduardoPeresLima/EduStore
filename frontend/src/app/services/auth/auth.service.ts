import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AddressCreateWithBuyer } from 'src/app/interfaces/address';
import { BuyerCreate, BuyerLogin } from 'src/app/interfaces/buyer';
import { environment } from 'src/environments/env';

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    constructor(
        private http: HttpClient
    ) { }
    private authURL = environment.BACKEND_URL + "/auth";

    httpOptionsJson = {
        headers: new HttpHeaders({
            //   'Content-Type': 'application/json',
            //   'Authorization': `Bearer ${this.authService.getDataInLocalStorage('token')}`
        })
    }

    httpOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/x-www-form-urlencoded'
        })
    };
    //Routes
    createBuyerWithAddress(buyerData: BuyerCreate, addressData: AddressCreateWithBuyer) {
        const url = `${this.authURL}/buyer_with_address`
        return this.http.post<any>(url, { 'buyer': buyerData, 'address': addressData }, this.httpOptionsJson);
    }
    loginBuyer(buyerData: BuyerLogin) {
        const url = `${this.authURL}/login`
        let body = `grant_type=&username=${buyerData.email}&password=${buyerData.password}`;
        return this.http.post<any>(url, body, this.httpOptions);
    }

    //Data

    setToken(token: string){
        localStorage.setItem('token', token);
    }
    getToken() {
        return localStorage.getItem('token');
    }
    removeToken() {
        return localStorage.removeItem('token');
    }

    setUserData(userData: object){
        localStorage.setItem("user", JSON.stringify(userData))
    }
    getUserData(){
        return JSON.parse(localStorage.getItem('user') || '{}')
    }
    removeUserData(){
        return localStorage.getItem('token');
    }
    clearStorage() {
        localStorage.clear();
    }

}
