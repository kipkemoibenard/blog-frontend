import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogRoutingModule } from './blog-routing.module';
import { PostNewsComponent } from './components/post-news/post-news.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ViewNewsComponent } from './components/view-news/view-news.component';
import { ViewCompleteStoryComponent } from './components/view-complete-story/view-complete-story.component';
import { SearchNewsByTitleComponent } from './components/search-news-by-title/search-news-by-title.component';


@NgModule({
  declarations: [
    PostNewsComponent,
    ViewNewsComponent,
    ViewCompleteStoryComponent,
    SearchNewsByTitleComponent
  ],
  imports: [
    CommonModule,
    BlogRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule
  
  ]
})
export class BlogModule { }
