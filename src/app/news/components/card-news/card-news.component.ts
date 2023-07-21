import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Result } from '@news/services/news/news.interface';

@Component({
  selector: 'app-card-news',
  templateUrl: './card-news.component.html',
  styleUrls: ['./card-news.component.scss'],
})
export class CardNewsComponent implements OnInit {
  @Input() news!: Result;
  @Output() redirect: EventEmitter<string> = new EventEmitter<string>();

  constructor(private router: Router) {}

  ngOnInit(): void {
    // console.log(this.news);
  }

  navigate(): void {
    this.redirect.emit('/news/detail/' + this.news.newId);
  }
}
