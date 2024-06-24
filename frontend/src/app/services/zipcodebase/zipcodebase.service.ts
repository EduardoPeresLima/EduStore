import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class ZipcodebaseService {
    constructor(
        private http: HttpClient
    ) { }

    private zipCodeBaseURL = 'https://app.zipcodebase.com/api/v1'
    private apiKey = '08be6cb0-318a-11ef-93c3-ef839a4a20fa'
    private httpOptionsJson = {
        headers: new HttpHeaders({
            //   'Content-Type': 'application/json',
            //   'Authorization': `Bearer ${this.authService.getDataInLocalStorage('token')}`
        })
    }
    getZipCodeInfo(zipCode: string){
        const url = `${this.zipCodeBaseURL}/search?apikey=${this.apiKey}&codes=${zipCode}`
        return this.http.get<any>(url, this.httpOptionsJson);
    }

}
