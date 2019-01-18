import { Component, OnInit } from '@angular/core';
import { MatDialog, MatGridList } from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'circlewebui';

  constructor() {}

  reciveProducts(products) {
    console.log('Foi emitido o evento e chegou no pai >>>> ', products);
  }

}
