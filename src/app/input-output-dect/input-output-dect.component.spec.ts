import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputOutputDectComponent } from './input-output-dect.component';

describe('InputOutputDectComponent', () => {
  let component: InputOutputDectComponent;
  let fixture: ComponentFixture<InputOutputDectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputOutputDectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InputOutputDectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
