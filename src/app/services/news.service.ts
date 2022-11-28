import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class NewsService {
  constructor(private http: HttpClient) { }
  getTopHeadlines() {
    return this.http.get('https://newsapi.org/v2/everything?q=tesla&from=2022-10-28&sortBy=publishedAt&apiKey=cd443e8a4c0c46909ea4692ac81c66fe');
  }
}