import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root',
})

export class AppService {

  constructor(private activatedRoute: ActivatedRoute) { }

  getURLSearchParam() {

    let param = 'a';

    this.activatedRoute.queryParams.subscribe(params => {
        param = params['search'];
    });

    return param;
  }
}
