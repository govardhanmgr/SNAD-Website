import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessarticlesComponent } from './businessarticles.component';

describe('BusinessarticlesComponent', () => {
  let component: BusinessarticlesComponent;
  let fixture: ComponentFixture<BusinessarticlesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BusinessarticlesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BusinessarticlesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
