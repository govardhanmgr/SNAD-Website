import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImpactfullnumbersComponent } from './impactfullnumbers.component';

describe('ImpactfullnumbersComponent', () => {
  let component: ImpactfullnumbersComponent;
  let fixture: ComponentFixture<ImpactfullnumbersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImpactfullnumbersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImpactfullnumbersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
