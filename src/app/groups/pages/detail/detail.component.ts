import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Result } from '@groups/services/groups/group.interface';
import { GroupsService } from '@groups/services/groups/groups.service';
import { UtilsService } from '@services/utils/utils.service';
import { Subject, take, takeUntil } from 'rxjs';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
})
export class DetailComponent implements OnInit, OnDestroy {
  public group!: Result;

  private id: string = '';
  private unsubscribe$: Subject<any> = new Subject<any>();

  constructor(
    public utilService: UtilsService,
    private routerActive: ActivatedRoute,
    private groupService: GroupsService
  ) {
    this.id = routerActive.snapshot.params['id'];
  }

  ngOnInit(): void {
    this.detailGroup();
  }

  ngOnDestroy(): void {
    this.detailGroup();
  }

  detailGroup() {
    this.groupService
      .detailt(this.id)
      .pipe(take(1))
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe({
        next: (res) => {
          if (res && res.result) this.group = res.result[0];

          console.log(res);
        },
        error: (error) => {},
        complete: () => {},
      });
  }
}
