import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MigrationStabilizationComponent } from './migration-stabilization.component';

describe('MigrationStabilizationComponent', () => {
  let component: MigrationStabilizationComponent;
  let fixture: ComponentFixture<MigrationStabilizationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MigrationStabilizationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MigrationStabilizationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
