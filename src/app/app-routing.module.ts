import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CategorySietviewsComponent } from './components/category-sietviews/category-sietviews.component';
import { CategoryComponent } from './components/category/category.component';
import { CaterogyHistoricComponent } from './components/caterogy-historic/caterogy-historic.component';
import { HistoricShowComponent } from './components/historic-list/historic-show/historic-show.component';
import { HomeComponent } from './components/home/home.component';
import { InvalidRootsComponent } from './components/invalid-roots/invalid-roots.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { RestaurantShowComponent } from './components/restaurant-list/restaurant-show/restaurant-show.component';
import { SideMenuComponentComponent } from './components/side-menu-component/side-menu-component.component';
import { SiteviewShowComponent } from './components/siteview-list/siteview-show/siteview-show.component';
import { ListUsersComponent } from './components/Users/list-users/list-users.component';

const routes: Routes = [
  {
    path: '',
    component: AppComponent,
    children: [
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
      },
      {
        path: 'login',
        component: LoginComponent,
      },
      {
        path: 'user',
        component: ListUsersComponent,
      },
      {
        path: 'restaurant',
        component: RestaurantShowComponent,
      },
      {
        path: 'historic',
        component: HistoricShowComponent,
      },
      {
        path: 'site',
        component: SiteviewShowComponent,
      },
      {
        path: 'home',
        component: HomeComponent,
      },
      {
        path: 'register',
        component: RegisterComponent,
      },
      {
        path: 'category',
        component: CategoryComponent,
        children: [
          {
            path: 'home',
            component: HomeComponent
          },
          {
            path: '',
            outlet: 'sidemenu',
            component: SideMenuComponentComponent
          }
        ]
      },
      {
        path: 'category-historic',
        component: CaterogyHistoricComponent,
        children: [
          {
            path: 'home',
            component: HomeComponent
          },
          {
            path: '',
            outlet: 'sidemenu',
            component: SideMenuComponentComponent
          }
        ]
      },
      {
        path: 'category-sietviews',
        component: CategorySietviewsComponent,
        children: [
          {
            path: 'home',
            component: HomeComponent
          },
          {
            path: '',
            outlet: 'sidemenu',
            component: SideMenuComponentComponent
          },
        ]
      },
      {
        path: '**',
        component: InvalidRootsComponent,
      },

    ],
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes), RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
