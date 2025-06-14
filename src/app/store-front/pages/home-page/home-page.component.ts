import { Component, inject } from '@angular/core';
import { rxResource } from '@angular/core/rxjs-interop';
import { ProductCardComponent } from "../../../products/components/product-card/product-card.component";
import { ProductsService } from '../../../products/services/products.service';


@Component({
  selector: 'app-home-page',
  imports: [ProductCardComponent],
  standalone: true,
  templateUrl: './home-page.component.html',
})
export class HomePageComponent {

  productsService = inject(ProductsService);

  productsResource = rxResource({
    request: () => ({ }),
    loader: ({}) => {
      return this.productsService.getProducts({});
    }, 
  });

 }


