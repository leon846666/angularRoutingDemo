import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { NewsComponent } from './components/news/news.component';
import { UserComponent } from './components/user/user.component';
import { NewscontentComponent } from './components/newscontent/newscontent.component';
import { ShoplistComponent } from './components/shoplist/shoplist.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { ShopcategoryComponent } from './components/shopcategory/shopcategory.component';
import { ShopComponent } from './components/shop/shop.component';

const routes: Routes = [
  {
    path:'user',
    component:UserComponent
  } ,
  {
    path:'home',
    component:HomeComponent,
    children:[
      {
        path:'welcome',
        component:WelcomeComponent
      }
    ]
  },
  
  {
    path:'news',
    component:NewsComponent
  },
  
  {
    path:'shop',
    component:ShopComponent,
    children:[
              {
                path:'shopcategory',
                component:ShopcategoryComponent
              }
              ,{
                path:'shoplist', //dynamic router
                component:ShoplistComponent
              }

          ]
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
