import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home-component/home.component';
import { MoviesComponent } from './components/movies-component/movies.component';
import { SeriesComponent } from './components/series-component/series.component';
import { ContentDetailsComponent } from './components/content-details/content-details.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { ListFavComponent } from './components/list-favorites/list-fav.component';
import { AboutComponentComponent } from './components/about-component/about-component.component';
import { FaqsComponentComponent } from './components/faqs-component/faqs-component.component';
import { ContactsComponentComponent } from './components/contacts-component/contacts-component.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'movies', component: MoviesComponent },
  { path: 'series', component: SeriesComponent },
  { path: 'content/details', component: ContentDetailsComponent },
  { path: 'navbar', component: NavbarComponent },
  { path: 'footer', component: FooterComponent },
  { path: 'list/favorites', component: ListFavComponent },
  { path: 'about', component: AboutComponentComponent },
  { path: 'faqs', component: FaqsComponentComponent },
  { path: 'contacts', component: ContactsComponentComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
