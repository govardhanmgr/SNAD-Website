import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CloudTransformationComponent } from './cloud-transformation.component';

describe('CloudTransformationComponent', () => {
  let component: CloudTransformationComponent;
  let fixture: ComponentFixture<CloudTransformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CloudTransformationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CloudTransformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
