import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FaqsComponentComponent } from './faqs-component.component';

describe('FaqsComponentComponent', () => {
  let component: FaqsComponentComponent;
  let fixture: ComponentFixture<FaqsComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FaqsComponentComponent]
    });
    fixture = TestBed.createComponent(FaqsComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
