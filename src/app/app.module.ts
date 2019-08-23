import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { BrowserModule }    from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { MediaService } from './media.service';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent    
  ],

  imports: [
    BrowserModule,
    FormsModule,    
    HttpClientModule,
    AppRoutingModule
  ],
  
  providers: [MediaService],
  bootstrap: [HomeComponent]
})
export class AppModule { }
