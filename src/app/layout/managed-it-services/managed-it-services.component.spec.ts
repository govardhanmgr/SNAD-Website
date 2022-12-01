import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagedItServicesComponent } from './managed-it-services.component';

describe('ManagedItServicesComponent', () => {
  let component: ManagedItServicesComponent;
  let fixture: ComponentFixture<ManagedItServicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManagedItServicesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManagedItServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
