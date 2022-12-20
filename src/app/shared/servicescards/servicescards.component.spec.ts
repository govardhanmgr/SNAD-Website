import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicescardsComponent } from './servicescards.component';

describe('ServicescardsComponent', () => {
  let component: ServicescardsComponent;
  let fixture: ComponentFixture<ServicescardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServicescardsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServicescardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
