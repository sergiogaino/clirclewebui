import { Component, OnInit } from '@angular/core';
import { AppService } from '../../app.service';

@Component({
  selector: 'app-load',
  templateUrl: './load.component.html',
  styleUrls: ['./load.component.scss']
})
export class LoadComponent implements OnInit {

  constructor( private appService: AppService ) { }

  searchParam: string;

  ngOnInit() {
    this.searchParam = this.appService.getURLSearchParam();
  }

}
