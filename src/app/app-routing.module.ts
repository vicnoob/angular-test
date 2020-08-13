import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroesComponent } from './heroes/heroes.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { PostsComponent } from './posts/posts.component';
import { PostDetailComponent } from './post-detail/post-detail.component';
import { AuthGuard } from './auth.guard'

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    // canActivateChild: [AuthGuard],
    children: [
      {
        path: '',
        children: [
          { path: '', redirectTo: '/post', pathMatch: 'full' },
          { path: 'post', component: PostsComponent },
          { path: 'post/:id', component: PostDetailComponent },
          { path: 'dashboard', component: DashboardComponent },
          { path: 'detail/:id', component: HeroDetailComponent },
          { path: 'heroes', component: HeroesComponent },
        ]
      }
    ]
  },
  { path: 'login', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }