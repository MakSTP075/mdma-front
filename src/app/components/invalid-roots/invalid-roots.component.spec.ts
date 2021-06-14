import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvalidRootsComponent } from './invalid-roots.component';

describe('InvalidRootsComponent', () => {
  let component: InvalidRootsComponent;
  let fixture: ComponentFixture<InvalidRootsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InvalidRootsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InvalidRootsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
