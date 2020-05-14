import { ProductService } from './product.service';
import { Component, OnInit } from '@angular/core';
import { IProduct } from './product';

@Component({
selector :'pm-products',
templateUrl: './product-list.component.html',
styleUrls:['./product-list.component.css']
})
export class ProductListComponent implements OnInit{


pageTitle :string ='Product List';
imageWidth : number=50;
imageMargin : number=2;
showImage : boolean=false;
errorMessage: string ;
_listfilter : string ;
get listFilter():string{
    return this._listfilter;
}
set listFilter(value:string){
    this._listfilter=value;
    this.filteredProducts = this.listFilter ? this.performFilter(this.listFilter) : this.products;
}
filteredProducts: IProduct[] = [];
products: IProduct[]=[];

toggleImage() : void{
    this.showImage=!this.showImage;
}
performFilter(filterBy: string) : IProduct[]{
    filterBy=filterBy.toLocaleLowerCase();
    return this.products.filter((product:IProduct)=>
        product.productName.toLocaleLowerCase().indexOf(filterBy)!=-1);
}
constructor(private productService : ProductService){
    this.filteredProducts=this.products;
    this.listFilter='Cart';    
}

onRatingClicked(message: string): void {
    this.pageTitle = 'Product List: ' + message;
  }
  ngOnInit(): void {
    this.productService.getProducts().subscribe({
      next: products => {
        this.products = products;
        this.filteredProducts = this.products;
      },
      error: err => this.errorMessage = err
    });
  }

}