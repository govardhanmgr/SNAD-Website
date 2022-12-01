import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobrequirmentComponent } from './jobrequirment.component';

describe('JobrequirmentComponent', () => {
  let component: JobrequirmentComponent;
  let fixture: ComponentFixture<JobrequirmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JobrequirmentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JobrequirmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
