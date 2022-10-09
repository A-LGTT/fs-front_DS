import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from "@angular/common/http";
import { RestaurantTableComponent } from './components/restaurant-table/restaurant-table.component';
import { RestaurantFormComponent } from './components/restaurant-form/restaurant-form.component';
import { RestaurantComponent } from './pages/restaurant/restaurant.component';
import {FormsModule} from "@angular/forms";
import {RestaurantService} from "./services/restaurant.service";

@NgModule({
  declarations: [
    AppComponent,
    RestaurantTableComponent,
    RestaurantFormComponent,
    RestaurantComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
