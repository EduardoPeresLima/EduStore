import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-brands',
  templateUrl: './home-brands.component.html',
  styleUrls: ['./home-brands.component.scss']
})
export class HomeBrandsComponent implements OnInit {
    brands : any[] = [
        {
            brand_name: 'Chakra Bracelet',
            brand_img: 'https://primefaces.org/cdn/primeng/images/demo/product/chakra-bracelet.jpg'
        },
        {
            brand_name: 'Galaxy Earrings',
            brand_img: 'https://primefaces.org/cdn/primeng/images/demo/product/galaxy-earrings.jpg'
        },
        {
            brand_name: 'Game Controller',
            brand_img: 'https://primefaces.org/cdn/primeng/images/demo/product/game-controller.jpg'
        },
    ]

    ngOnInit(): void {
        for(let i=0;i<5;i++){
            for(let j=0;j<3;j++){
                this.brands.push(this.brands[j]);
            }
        }
    }
}
