import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { BlogsComponent } from './blog/blogs/blogs.component';
import { EditBlogComponent } from './blog/edit-blog/edit-blog.component';
import { ViewBlogComponent } from './blog/view-blog/view-blog.component';
import { AdminGuard } from './guards/admin.guard';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', redirectTo: '', pathMatch: 'full' },  
  { path: 'blogs', component: BlogsComponent },
  { path: 'blogs/:id', component: ViewBlogComponent },
  { path: 'blogs/:id/edit', canActivate: [AdminGuard], component: EditBlogComponent },
  { path: 'about', component: AboutComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
