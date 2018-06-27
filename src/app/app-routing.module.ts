import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { NewsComponent } from './components/news/news.component';
import { UserComponent } from './components/user/user.component';
import { NewscontentComponent } from './components/newscontent/newscontent.component';

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
  }
  ,{
    path:'newscontent/:aid', //dynamic router
    component:NewscontentComponent
  },{
    // default 
    path:'',
    redirectTo:'home',
    pathMatch:'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
