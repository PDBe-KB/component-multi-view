import {Component} from '@angular/core';
import {UniProtMapping} from './multi-view/multi-view.models';
import {MOCKDATA} from './mock-data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  data: UniProtMapping[];
  accession: string;

  constructor() {
    this.data = MOCKDATA;
    this.accession = '1cbs';
  }
}
