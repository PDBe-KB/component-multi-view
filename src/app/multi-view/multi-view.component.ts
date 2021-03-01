import {Component, Input} from '@angular/core';
import {UniProtMapping} from './multi-view.models';

@Component({
  selector: 'app-multi-view',
  templateUrl: './multi-view.component.html',
  styleUrls: ['./multi-view.component.css']
})
export class MultiViewComponent {

  @Input() data: UniProtMapping[];
  @Input() pdbId: string;

  getCanonicalUniProt(): any {
    const canonicalUniProtList = [];
    for (let i = 0; i < this.data.length; i++) {
      if (this.data[i].accession.indexOf('-') === -1) {
        canonicalUniProtList.push(this.data[i]);
      }
    }
    return canonicalUniProtList;
  }

}
