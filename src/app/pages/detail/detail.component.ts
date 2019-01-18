import { Component, OnInit } from '@angular/core';
import { SearchService } from '../../modules/search/search.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  searchParam: string;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private searchService: SearchService
  ) { }

  ngOnInit() {
    this.searchProducts();
  }

  searchProducts() {
    // tslint:disable-next-line:no-debugger
    debugger;
    this.route.queryParams.subscribe(params => {
      this.searchParam = params['search'];
    });
    this.searchService.searchProducts(this.searchParam);
  }

}
