import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryUpdateListingComponent } from './category-update-listing.component';

describe('CategoryUpdateListingComponent', () => {
  let component: CategoryUpdateListingComponent;
  let fixture: ComponentFixture<CategoryUpdateListingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategoryUpdateListingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoryUpdateListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
