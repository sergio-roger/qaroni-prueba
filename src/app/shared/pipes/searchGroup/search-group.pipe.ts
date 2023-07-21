import { Pipe, PipeTransform } from '@angular/core';
import { Result } from '@groups/services/groups/group.interface';

@Pipe({
  name: 'searchGroup',
})
export class SearchGroupPipe implements PipeTransform {
  transform(groups: Result[], search: string): Result[] {
    if (search.length === 0) return groups;

    search = search.toLowerCase();

    return groups.filter((item) => {
      return item.name.toLowerCase().includes(search);
    });
  }
}
