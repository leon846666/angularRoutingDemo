import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { NewsComponent } from './components/news/news.component';
import { UserComponent } from './components/user/user.component';

const routes: Routes = [
  {
    path:'user',
    component:UserComponent
  },
  {
    path:'news',
    component:NewsComponent
  },
  {
    path:'home',
    component:HomeComponent
  },{
    // default 
    path:'',
    redirectTo:'home',
    pathMatch:'full'
  },{
    // 404
    path:'**',
    component:HomeComponent
    
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
