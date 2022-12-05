import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { NewsResponse, Article } from '../interfaces/index';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
let date: Date = new Date();
const apiKey=environment.apiKey;
@Injectable({
  providedIn: 'root'
})
export class NewsService {
  constructor(private http: HttpClient) { }
  getTopHeadlines(): Observable<Article[]> {
    return this.http.get<NewsResponse>('https://newsapi.org/v2/everything?q=tesla&from='+ date.getFullYear()+'-'+date.getMonth()+'-'+date.getDay()+'s&sortBy=publishedAt',{
      params:{
      apiKey:apiKey
      }
      }).pipe(
      map(({ articles }) => articles)
      
    );
  }
}