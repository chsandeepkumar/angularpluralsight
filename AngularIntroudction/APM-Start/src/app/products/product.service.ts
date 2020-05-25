import { tap, catchError } from 'rxjs/operators';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { IProduct } from './product';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';

@Injectable({
    providedIn: 'root'
  })
export class ProductService
{
  private producturl='api/products/products.json'
  
  constructor(private http: HttpClient) {   
    
  }
 getProducts(): Observable<IProduct[]> {
    return this.http.get<IProduct[]>(this.producturl)
      .pipe(
        tap(data => console.log('All: ' + JSON.stringify(data))),
        catchError(this.handleError)
      );
  }
  handleError(handleError: HttpErrorResponse)
  {
return throwError("error occured in getProducts() method");
  }
  

}
