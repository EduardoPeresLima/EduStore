import { Component } from '@angular/core';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent {
    topCategories: string[] = ["Apps and Games", "Books", "Home Appliances", "Fashion", "Furnitures"];
    //Sales images obtained from https://primeng.org/carousel
    
    recommendedBrands: any[] = []
    hotProducts: any[] = []

}
