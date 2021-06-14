import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaterogyHistoricComponent } from './caterogy-historic.component';

describe('CaterogyHistoricComponent', () => {
  let component: CaterogyHistoricComponent;
  let fixture: ComponentFixture<CaterogyHistoricComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CaterogyHistoricComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CaterogyHistoricComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
