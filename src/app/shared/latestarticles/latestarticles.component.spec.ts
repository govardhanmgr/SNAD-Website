import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LatestarticlesComponent } from './latestarticles.component';

describe('LatestarticlesComponent', () => {
  let component: LatestarticlesComponent;
  let fixture: ComponentFixture<LatestarticlesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LatestarticlesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LatestarticlesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
