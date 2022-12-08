import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinancearticlesComponent } from './financearticles.component';

describe('FinancearticlesComponent', () => {
  let component: FinancearticlesComponent;
  let fixture: ComponentFixture<FinancearticlesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FinancearticlesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FinancearticlesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
