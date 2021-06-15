import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterBrandProductComponent } from './filter-brand-product.component';

describe('FilterBrandProductComponent', () => {
  let component: FilterBrandProductComponent;
  let fixture: ComponentFixture<FilterBrandProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilterBrandProductComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterBrandProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
