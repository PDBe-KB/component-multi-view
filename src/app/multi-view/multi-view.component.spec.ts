import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiViewComponent } from './multi-view.component';

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
    component.data = {};
    component.pdbId = '1cbs';
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('getCanonicalUniProt() should work', () => {
    component.data = {'Q123456': {}, 'Q123456-1': {}};
    expect(component.getCanonicalUniProt()[0]['accession']).toEqual('Q123456');
  });
});
