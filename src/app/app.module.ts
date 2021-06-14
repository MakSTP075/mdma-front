import { HttpClientModule } from '@angular/common/http';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { KorisnikService } from './services/korisnik.service';
import { LoginComponent } from './components/login/login.component';
import { InvalidRootsComponent } from './components/invalid-roots/invalid-roots.component';
import { ListUsersComponent } from './components/Users/list-users/list-users.component';
import { AddUsersComponent } from './components/Users/add-users/add-users.component';
import { EditUsersComponent } from './components/Users/edit-users/edit-users.component';
import { DeleteUsersComponent } from './components/Users/delete-users/delete-users.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import { UserSearchPipe } from './pipes/user-search.pipe';
import { HomeComponent } from './components/home/home.component';
import { RestaurantListComponent } from './components/restaurant-list/restaurant-list.component';
import { HistoricListComponent } from './components/historic-list/historic-list.component';
import { SiteviewListComponent } from './components/siteview-list/siteview-list.component';
import { HistoricShowComponent } from './components/historic-list/historic-show/historic-show.component';
import { RestaurantShowComponent } from './components/restaurant-list/restaurant-show/restaurant-show.component';
import { SiteviewShowComponent } from './components/siteview-list/siteview-show/siteview-show.component';
import { CategoryComponent } from './components/category/category.component';
import { SideMenuComponentComponent } from './components/side-menu-component/side-menu-component.component';
import { CaterogyHistoricComponent } from './components/caterogy-historic/caterogy-historic.component';
import { CategorySietviewsComponent } from './components/category-sietviews/category-sietviews.component';
import { RegisterComponent } from './components/register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    InvalidRootsComponent,
    ListUsersComponent,
    AddUsersComponent,
    EditUsersComponent,
    DeleteUsersComponent,
    UserSearchPipe,
    HomeComponent,
    RestaurantListComponent,
    HistoricListComponent,
    SiteviewListComponent,
    HistoricShowComponent,
    RestaurantShowComponent,
    SiteviewShowComponent,
    CategoryComponent,
    SideMenuComponentComponent,
    CaterogyHistoricComponent,
    CategorySietviewsComponent,
    RegisterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,

    ],
    exports: [HomeComponent,],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [(CUSTOM_ELEMENTS_SCHEMA)],
})
export class AppModule {}
