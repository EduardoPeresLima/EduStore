import { Component } from '@angular/core';

@Component({
  selector: 'app-home-products',
  templateUrl: './home-products.component.html',
  styleUrls: ['./home-products.component.scss']
})
export class HomeProductsComponent {

    carouselResponsiveOptions = [
        {
            breakpoint: '1366px',
            numVisible: 3,
            numScroll: 1
        },
        {
            breakpoint: '1024px',
            numVisible: 2,
            numScroll: 1
        },
        {
            breakpoint: '730px',
            numVisible: 1,
            numScroll: 1
        }
    ];
    topSellingProducts: any[] = [
        {
            product_name: 'Chakra Bracelet',
            product_img: 'https://primefaces.org/cdn/primeng/images/demo/product/chakra-bracelet.jpg',
            old_price: 50,
            price: 32,
            currency: 'BRL',
            discount_percentage: 100,
            saleExpireDatetime: '',
            countdown_timer: ''
        },
        {
            product_name: 'Galaxy Earrings',
            product_img: 'https://primefaces.org/cdn/primeng/images/demo/product/galaxy-earrings.jpg',
            old_price: 48,
            price: 34,
            currency: 'USD',
            discount_percentage: 29,
            saleExpireDatetime: '',
            countdown_timer: ''
        },
        {
            product_name: 'Game Controller',
            product_img: 'https://primefaces.org/cdn/primeng/images/demo/product/game-controller.jpg',
            old_price: 157,
            price: 99,
            currency: 'EUR',
            discount_percentage: 37,
            saleExpireDatetime: '',
            countdown_timer: ''
        },
        {
            product_name: 'Game Controller',
            product_img: 'https://primefaces.org/cdn/primeng/images/demo/product/game-controller.jpg',
            old_price: 157,
            price: 99,
            currency: 'EUR',
            discount_percentage: 37,
            saleExpireDatetime: '',
            countdown_timer: ''
        },
        {
            product_name: 'Game Controller',
            product_img: 'https://primefaces.org/cdn/primeng/images/demo/product/game-controller.jpg',
            old_price: 157,
            price: 99,
            currency: 'EUR',
            discount_percentage: 37,
            saleExpireDatetime: '',
            countdown_timer: ''
        }
    ]
    updateTopSalesCountdown(): boolean {
        let now = new Date().getTime();

        let all_expired = true;
        for (let topSale of this.topSellingProducts) {
            let distance = new Date(topSale.saleExpireDatetime).getTime() - now;
            if (distance <= 0) {
                topSale.countdown_timer = 'EXPIRED';
            }
            else {
                all_expired = false;
                let days = Math.floor(distance / (1000 * 60 * 60 * 24));
                let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
                let seconds = Math.floor((distance % (1000 * 60)) / 1000);
                topSale.countdown_timer = `${days > 0 ? days.toString() + 'd ' : ''} ${(hours < 10 ? '0' : '') + hours}:${(minutes < 10 ? '0' : '') + minutes}:${(seconds < 10 ? '0' : '') + seconds}`;
            }
        }
        return all_expired
    }
    ngOnInit(): void {
        for (let topSale of this.topSellingProducts) {
            topSale.saleExpireDatetime = '2024-08-08 00:00:00';
            this.updateTopSalesCountdown();
        }
        var countdownInterval = setInterval(() => {
            let all_expired = this.updateTopSalesCountdown();
            if (all_expired) {
                clearInterval(countdownInterval);
            }
        }, 1000);
    }
    buyItem(){

    }
}
