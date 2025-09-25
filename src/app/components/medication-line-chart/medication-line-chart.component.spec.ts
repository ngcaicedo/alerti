import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicationLineChartComponent } from './medication-line-chart.component';

describe('MedicationLineChartComponent', () => {
  let component: MedicationLineChartComponent;
  let fixture: ComponentFixture<MedicationLineChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MedicationLineChartComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MedicationLineChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
