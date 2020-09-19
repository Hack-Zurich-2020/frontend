import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MockJsonOutputsComponent } from './mock-json-outputs/mock-json-outputs.component';
import { HttpClientModule } from '@angular/common/http';
import { FoodCardComponent } from './food-card/food-card.component';

@NgModule({
  declarations: [
    AppComponent,
    MockJsonOutputsComponent,
    FoodCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
