import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SideMenuComponentComponent } from './side-menu-component.component';

describe('SideMenuComponentComponent', () => {
  let component: SideMenuComponentComponent;
  let fixture: ComponentFixture<SideMenuComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SideMenuComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SideMenuComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
