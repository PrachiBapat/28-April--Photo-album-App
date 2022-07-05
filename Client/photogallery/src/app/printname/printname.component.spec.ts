import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrintnameComponent } from './printname.component';

describe('PrintnameComponent', () => {
  let component: PrintnameComponent;
  let fixture: ComponentFixture<PrintnameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrintnameComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrintnameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
