import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SiteviewListComponent } from './siteview-list.component';

describe('SiteviewListComponent', () => {
  let component: SiteviewListComponent;
  let fixture: ComponentFixture<SiteviewListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SiteviewListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SiteviewListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
