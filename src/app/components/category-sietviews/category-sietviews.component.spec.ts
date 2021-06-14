import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategorySietviewsComponent } from './category-sietviews.component';

describe('CategorySietviewsComponent', () => {
  let component: CategorySietviewsComponent;
  let fixture: ComponentFixture<CategorySietviewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategorySietviewsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CategorySietviewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
