import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Result } from '@news/services/news/news.interface';
import { NewsService } from '@news/services/news/news.service';
import { Subject, take, takeUntil } from 'rxjs';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
})
export class DetailComponent implements OnInit, OnDestroy {
  public news!: Result;

  private id: string = '';
  private unsubscribe$: Subject<any> = new Subject<any>();

  constructor(
    private activeRouter: ActivatedRoute,
    private newsService: NewsService
  ) {
    this.id = this.activeRouter.snapshot.params['slug'];
  }

  ngOnInit(): void {
    this.getNews();
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next(null);
    this.unsubscribe$.complete();
  }

  getNews() {
    this.newsService
      .detail(this.id)
      .pipe(take(1))
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe({
        next: (res) => {
          if (res && res.result.length > 0) this.news = res.result[0];
        },
        error: (error) => {
          console.log(error);
        },
        complete: () => {},
      });
  }
}
