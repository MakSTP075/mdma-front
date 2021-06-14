import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoricShowComponent } from './historic-show.component';

describe('HistoricShowComponent', () => {
  let component: HistoricShowComponent;
  let fixture: ComponentFixture<HistoricShowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HistoricShowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HistoricShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
