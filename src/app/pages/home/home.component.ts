import { Component, OnInit } from '@angular/core';
import { AppService } from '../../app.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  recomendations = [];
  promotions = [];

  showLoadRecomendations = true;
  showLoadPromotions = true;

  constructor(
    private appService: AppService,
    ) { }

  ngOnInit() {
     this.listRecomendations();
     this.listPromotions();
  }

  async listPromotions() {
    const promotionalProducts = await this.appService.getPromotions('6019');

    promotionalProducts.forEach(async product => {

      const sku = product.id;
      const promotionalProdut = await this.appService.getPromotionalProduct(sku);
      this.promotions.push(promotionalProdut);

    });

    this.showLoadPromotions = false;
  }

  async listRecomendations() {

    const recomendedProducts = await this.appService.getRecomendations('5049');

    recomendedProducts.forEach(async product => {

      const sku = product.id;
      const recomendedProdut = await this.appService.getRecomendedProduct(sku);
      this.recomendations.push(recomendedProdut);

    });

    this.showLoadRecomendations = false;
  }

}
