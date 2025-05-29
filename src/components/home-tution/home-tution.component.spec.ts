import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeTutionComponent } from './home-tution.component';

describe('HomeTutionComponent', () => {
  let component: HomeTutionComponent;
  let fixture: ComponentFixture<HomeTutionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomeTutionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeTutionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
