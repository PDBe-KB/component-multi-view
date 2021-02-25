import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-multi-view',
  templateUrl: './multi-view.component.html',
  styleUrls: ['./multi-view.component.css']
})
export class MultiViewComponent implements OnInit {

  @Input() data: any;
  @Input() pdbId: string;

  getCanonicalUniProt(): any {
    const canonicalUniProtList = [];
    for (const key of Object.keys(this.data)) {
      const temp = this.data[key];
      temp['accession'] = key;
      if (key.indexOf('-') === -1) {
        canonicalUniProtList.push(this.data[key]);
      }
    }
    return canonicalUniProtList;
  }

  constructor() { }

  ngOnInit() {
  }

}
