import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class TmdbService {
  private apiKey =
    'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlNDU5YTcwZjI3ZmVlMmYzNDA1Y2MyNzljZDk4MGQ1ZSIsInN1YiI6IjY2NzE3NDQwYzc1MjgwZGRmNTgzY2Y1MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.zeNHSpS_kXqkI0Qr3PBncc-Nzl-Klt_sU0qkT84C7Zg';
  private apiUrl = 'https://api.themoviedb.org/3';
  private headers = new HttpHeaders({
    accept: 'application/json',
    Authorization: `Bearer ${this.apiKey}`,
  });

  constructor(private http: HttpClient) {}

  // Método para obter filmes populares
  getMovies(): Observable<any> {
    return this.http
      .get(`${this.apiUrl}/movie/popular`, { headers: this.headers })
      .pipe(catchError(this.handleError));
  }

  // Método para obter séries populares
  getSeries(): Observable<any> {
    return this.http
      .get(`${this.apiUrl}/tv/popular`, { headers: this.headers })
      .pipe(catchError(this.handleError));
  }

  // Método para buscar filmes por título
  searchMovies(query: string): Observable<any> {
    return this.http
      .get(`${this.apiUrl}/search/movie`, {
        headers: this.headers,
        params: { query },
      })
      .pipe(catchError(this.handleError));
  }

  // Método para obter detalhes de um filme por ID
  getMovieDetails(id: number): Observable<any> {
    return this.http
      .get(`${this.apiUrl}/movie/${id}`, { headers: this.headers })
      .pipe(catchError(this.handleError));
  }

  // Método para obter detalhes de uma série por ID
  getSeriesDetails(id: number): Observable<any> {
    return this.http
      .get(`${this.apiUrl}/tv/${id}`, { headers: this.headers })
      .pipe(catchError(this.handleError));
  }

  // Método para tratar erros
  private handleError(error: any) {
    console.error('Erro na API TMDB', error);
    return throwError('Erro ao se comunicar com o servidor.');
  }
}
