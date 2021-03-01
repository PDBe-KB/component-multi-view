import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {MultiViewComponent} from './multi-view.component';

describe('MultiViewComponent', () => {
  let component: MultiViewComponent;
  let fixture: ComponentFixture<MultiViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MultiViewComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MultiViewComponent);
    component = fixture.componentInstance;
    component.data = [{
      'accession': 'P12345',
      'name': 'PROTEIN',
      'identifier': 'ABC_HUMAN',
      'mappings': [
        {
          'entity_id': 1,
          'chain_id': 'A',
          'struct_asym_id': 'A',
          'start': {
            'author_residue_number': 1,
            'author_insertion_code': '',
            'residue_number': 1
          },
          'end': {
            'author_residue_number': 42,
            'author_insertion_code': '',
            'residue_number': 42
          },
          'unp_start': 2,
          'unp_end': 43,
          'pdb_start': 1,
          'pdb_end': 42
        }
      ],
      'description': 'Bla bla bla bla'
    }];
    component.pdbId = '1cbs';
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('getCanonicalUniProt() should work', () => {
    expect(component.getCanonicalUniProt()[1]['accession']).toEqual('P29373');
  });
});
