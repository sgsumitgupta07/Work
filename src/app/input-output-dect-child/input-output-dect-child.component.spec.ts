import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputOutputDectChildComponent } from './input-output-dect-child.component';

describe('InputOutputDectChildComponent', () => {
  let component: InputOutputDectChildComponent;
  let fixture: ComponentFixture<InputOutputDectChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputOutputDectChildComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InputOutputDectChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
