import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceheroimageComponent } from './serviceheroimage.component';

describe('ServiceheroimageComponent', () => {
  let component: ServiceheroimageComponent;
  let fixture: ComponentFixture<ServiceheroimageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServiceheroimageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServiceheroimageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
