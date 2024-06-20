import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home-component/home.component';
import { MoviesComponent } from './components/movies-component/movies.component';
import { SeriesComponent } from './components/series-component/series.component';
import { ContentDetailsComponent } from './components/content-details/content-details.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { ListFavComponent } from './components/list-favorites/list-fav.component';
import { ContactsComponentComponent } from './components/contacts-component/contacts-component.component';
import { FaqsComponentComponent } from './components/faqs-component/faqs-component.component';
import { AboutComponentComponent } from './components/about-component/about-component.component';
import { TmdbService } from './services/tmdb.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MoviesComponent,
    SeriesComponent,
    ContentDetailsComponent,
    NavbarComponent,
    FooterComponent,
    ListFavComponent,
    ContactsComponentComponent,
    FaqsComponentComponent,
    AboutComponentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
