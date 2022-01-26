import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product, products } from '../products';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent implements OnInit {
  product: Product | undefined;

  // ActivatedRoute는 Angular Router가 로드한 개별 컴포넌트에 대한 정보를 담고 있다. 이 객체를 참조하면 해당 컴포넌트가 표시될 때 사용된 라우팅 규칙이나 라우팅 인자를 확인할 수 있다.
  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    // 현재 라우트에서 productId를 가져온다.
    const routeParams = this.route.snapshot.paramMap;
    const productIdFromRoute = Number(routeParams.get('productId'));

    //
    this.product = products.find(
      (product) => product.id === productIdFromRoute
    );
  }
}
