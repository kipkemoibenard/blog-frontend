import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogModule } from './features/blog/blog.module';

const routes: Routes = [
  { path: 'blog', loadChildren: () => import('./features/blog/blog.module').then(m => m.BlogModule)},
  // { path: '', redirectTo: '/home', pathMatch: 'full' }, // Default route
  // // { path: '**', redirectTo: '/home' } // Wildcard route
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
