import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactupComponent } from './contactup.component';

describe('ContactupComponent', () => {
  let component: ContactupComponent;
  let fixture: ComponentFixture<ContactupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ContactupComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
