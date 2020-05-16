import { ActivatedRoute, Router } from '@angular/router';

import { Component, OnInit } from '@angular/core';
import { IProduct } from './product';

@Component({
   templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  pageTitle:string="Product Detail";
  product: IProduct

  constructor(private route : ActivatedRoute,private router:Router) { 
    
  }

  onBack():void{
    this.router.navigate(['/products']);
  }

  ngOnInit(): void {
    let id=+this.route.snapshot.paramMap.get('id');//+ is 
    this.pageTitle+=`:${id}`;
    this.product={
      "productId": 1,
      "productName": "Leaf Rake",
      "productCode": "GDN-0011",
      "releaseDate": "March 19, 2019",
      "description": "Leaf rake with 48-inch wooden handle.",
      "price": 19.95,
      "starRating": 3.2,
      "imageUrl": "assets/images/leaf_rake.png"
    };
  }

}
