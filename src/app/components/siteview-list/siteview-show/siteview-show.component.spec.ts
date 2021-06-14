import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SiteviewShowComponent } from './siteview-show.component';

describe('SiteviewShowComponent', () => {
  let component: SiteviewShowComponent;
  let fixture: ComponentFixture<SiteviewShowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SiteviewShowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SiteviewShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
