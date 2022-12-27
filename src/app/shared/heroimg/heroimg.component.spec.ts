import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroimgComponent } from './heroimg.component';

describe('HeroimgComponent', () => {
  let component: HeroimgComponent;
  let fixture: ComponentFixture<HeroimgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeroimgComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeroimgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
