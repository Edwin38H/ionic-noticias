import { Component, OnInit } from '@angular/core';
import { NewsService } from 'src/app/services/news.service';
import { Article } from 'src/app/interfaces';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {
  public: any
  categories: string[] = ['business', 'entertainment', 'general', 'health', 'science'
    , 'sports', 'technology'];
  public selectedCategory: string = this.categories[0];
  public articles: Article[] = [];
  constructor(private newsService: NewsService) { }
  ngOnInit() {
    this.newsService.getTopHeadlinesByCategory(this.selectedCategory)
      .subscribe(articles => {
        //console.log(articles);
        this.articles = [...this.articles, ...articles]
      })
  }
  segmentChanged(event: any) {
    this.selectedCategory = event.detail.value;
    this.newsService.getTopHeadlinesByCategory(this.selectedCategory)
      .subscribe(articles => {
        //console.log(articles);
        this.articles = [...articles]
      })
  }
}