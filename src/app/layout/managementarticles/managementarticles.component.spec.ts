import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagementarticlesComponent } from './managementarticles.component';

describe('ManagementarticlesComponent', () => {
  let component: ManagementarticlesComponent;
  let fixture: ComponentFixture<ManagementarticlesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManagementarticlesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManagementarticlesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
