import { Component, OnInit } from '@angular/core';
import { Result } from '@groups/services/groups/group.interface';
import { GroupsService } from '@groups/services/groups/groups.service';
import { UtilsService } from '@services/utils/utils.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  public search: string = '';
  public groups$: Observable<Result[]> = new Observable<Result[]>();

  constructor(
    private groupService: GroupsService,
    public utilService: UtilsService
  ) {}

  ngOnInit(): void {
    this.groups$ = this.groupService.groups;
  }

  setSearch(event: any): void {
    this.search = event.target.value as string;
  }
}
