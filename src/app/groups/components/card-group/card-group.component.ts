import { Component, Input, OnInit } from '@angular/core';
import { Result } from '@groups/services/groups/group.interface';

@Component({
  selector: 'app-card-group',
  templateUrl: './card-group.component.html',
  styleUrls: ['./card-group.component.scss'],
})
export class CardGroupComponent implements OnInit {
  @Input() group!: Result;

  constructor() {}

  ngOnInit(): void {
    // console.log(this.group);
  }
}
