import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestomonialComponent } from './testomonial.component';

describe('TestomonialComponent', () => {
  let component: TestomonialComponent;
  let fixture: ComponentFixture<TestomonialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestomonialComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestomonialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
