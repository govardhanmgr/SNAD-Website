import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CASESTUDIESComponent } from './casestudies.component';

describe('CASESTUDIESComponent', () => {
  let component: CASESTUDIESComponent;
  let fixture: ComponentFixture<CASESTUDIESComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CASESTUDIESComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CASESTUDIESComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
