import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnHoverActionsComponent } from './on-hover-actions.component';

describe('OnHoverActionsComponent', () => {
  let component: OnHoverActionsComponent;
  let fixture: ComponentFixture<OnHoverActionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OnHoverActionsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OnHoverActionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
