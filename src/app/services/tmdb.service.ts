import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TmdbService {
  private apiKey = 'e459a70f27fee2f3405cc279cd980d5e';
  private apiUrl = 'https://api.themoviedb.org/3';

  constructor(private http: HttpClient) {}
  getMovies(): Observable<any> {
    return this.http.get(`${this.apiUrl}/movie/popular?api_key=${this.apiKey}`);
  }

  getSeries(): Observable<any> {
    return this.http.get(`${this.apiUrl}/tv/popular?api_key=${this.apiKey}`);
  }
}
