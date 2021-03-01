import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiViewComponent } from './multi-view.component';
import {MOCKDATA} from '../mock-data';

describe('MultiViewComponent', () => {
  let component: MultiViewComponent;
  let fixture: ComponentFixture<MultiViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MultiViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MultiViewComponent);
    component = fixture.componentInstance;
    component.data = MOCKDATA;
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
