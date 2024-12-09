import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostNewsComponent } from './components/post-news/post-news.component';
import { ViewNewsComponent } from './components/view-news/view-news.component';
import { ViewCompleteStoryComponent } from './components/view-complete-story/view-complete-story.component';
import { SearchNewsByTitleComponent } from './components/search-news-by-title/search-news-by-title.component';

const routes: Routes = [
  { path: 'post', component: PostNewsComponent},
  { path: 'view', component: ViewNewsComponent},
  { path: ':title/:id', component: ViewCompleteStoryComponent},
  { path: 'search-by-title', component: SearchNewsByTitleComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlogRoutingModule { }
