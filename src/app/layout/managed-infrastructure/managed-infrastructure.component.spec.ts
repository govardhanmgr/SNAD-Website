import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagedInfrastructureComponent } from './managed-infrastructure.component';

describe('ManagedInfrastructureComponent', () => {
  let component: ManagedInfrastructureComponent;
  let fixture: ComponentFixture<ManagedInfrastructureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManagedInfrastructureComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManagedInfrastructureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
