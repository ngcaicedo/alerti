import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomNavRailComponent } from './custom-nav-rail.component';

describe('CustomNavRailComponent', () => {
  let component: CustomNavRailComponent;
  let fixture: ComponentFixture<CustomNavRailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomNavRailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomNavRailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
