import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { Product, ProductsResponse } from '../interfaces/product.interface';
import { environment } from '../../../environments/environment.development';

const baseUrl = environment.baseUrl;

interface Options {
  limit?: number;
  offset?: number;
  gender?: string;
}

@Injectable({ providedIn: 'root' })
export class ProductsService {
  private http = inject(HttpClient);

  getProducts(options: Options): Observable<ProductsResponse> {
    const { limit = 9, offset = 0, gender = '' } = options;

    //prueba de commit

    return this.http
      .get<ProductsResponse>(`${baseUrl}/products`, {
        params: {
          limit: limit,
          offset: offset,
          gender: gender,
        },
      })
      .pipe(
        tap((resp) => {
          const fullUrl = `${baseUrl}/products?limit=${limit}&offset=${offset}&gender=${gender}`;
          console.log('➡️ GET:', fullUrl);
          console.log('📦 Response:', resp);
        })
      );
  }

  getProductByIdSlug(idSlug: string) : Observable<Product>{
    return this.http.get<Product>(`${baseUrl}/products/${idSlug}`);

  }
}
