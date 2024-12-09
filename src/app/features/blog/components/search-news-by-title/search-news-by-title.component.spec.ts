import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchNewsByTitleComponent } from './search-news-by-title.component';

describe('SearchNewsByTitleComponent', () => {
  let component: SearchNewsByTitleComponent;
  let fixture: ComponentFixture<SearchNewsByTitleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SearchNewsByTitleComponent]
    });
    fixture = TestBed.createComponent(SearchNewsByTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
