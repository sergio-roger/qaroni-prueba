import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { GroupsService } from './groups/groups.service';

export const groupResolver: ResolveFn<any> = (route, state) => {
  const groupService = inject(GroupsService);

  return groupService.getGroups();
};
