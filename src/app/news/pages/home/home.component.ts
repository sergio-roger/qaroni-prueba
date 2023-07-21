import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Result, newsResponse } from '@news/services/news/news.interface';
import { NewsService } from '@news/services/news/news.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public merchantResponse: Observable<newsResponse | null> =
    new Observable<newsResponse | null>();
  public merchants: Observable<Result[]> = new Observable<Result[]>();

  constructor(private newsService: NewsService, private router: Router) {}

  ngOnInit(): void {
    this.merchantResponse = this.newsService.merchantResponse;
    this.merchants = this.newsService.merchants;
  }

  navigate(link: string) {
    this.router.navigateByUrl(link);
  }
}
