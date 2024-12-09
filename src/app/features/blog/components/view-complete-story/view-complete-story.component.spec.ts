import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewCompleteStoryComponent } from './view-complete-story.component';

describe('ViewCompleteStoryComponent', () => {
  let component: ViewCompleteStoryComponent;
  let fixture: ComponentFixture<ViewCompleteStoryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewCompleteStoryComponent]
    });
    fixture = TestBed.createComponent(ViewCompleteStoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
