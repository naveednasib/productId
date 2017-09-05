import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowproductdetailComponent } from './showproductdetail.component';

describe('ShowproductdetailComponent', () => {
  let component: ShowproductdetailComponent;
  let fixture: ComponentFixture<ShowproductdetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowproductdetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowproductdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
