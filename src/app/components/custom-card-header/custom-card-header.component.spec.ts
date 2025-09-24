import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomCardHeaderComponent } from './custom-card-header.component';

describe('CustomCardHeaderComponent', () => {
  let component: CustomCardHeaderComponent;
  let fixture: ComponentFixture<CustomCardHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomCardHeaderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomCardHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
