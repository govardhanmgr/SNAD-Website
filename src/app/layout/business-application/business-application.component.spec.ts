import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessApplicationComponent } from './business-application.component';

describe('BusinessApplicationComponent', () => {
  let component: BusinessApplicationComponent;
  let fixture: ComponentFixture<BusinessApplicationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BusinessApplicationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BusinessApplicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
