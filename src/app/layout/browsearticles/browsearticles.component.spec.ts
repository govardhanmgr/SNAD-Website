import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrowsearticlesComponent } from './browsearticles.component';

describe('BrowsearticlesComponent', () => {
  let component: BrowsearticlesComponent;
  let fixture: ComponentFixture<BrowsearticlesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BrowsearticlesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BrowsearticlesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
