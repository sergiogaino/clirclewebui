import { Component, OnInit } from '@angular/core';
import { AppService } from '../../app.service';
import { async } from '@angular/core/testing';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  recomendations = [];
  promotions = [];

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
  }

  async listRecomendations() {

    const recomendedProducts = await this.appService.getRecomendations('5049');

    recomendedProducts.forEach(async product => {

      const sku = product.id;
      const recomendedProdut = await this.appService.getRecomendedProduct(sku);
      this.recomendations.push(recomendedProdut);

    });
  }

}
