import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { UtilsService } from '@services/utils/utils.service';

export const sesionGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const utilService = inject(UtilsService);

  if (!utilService.token) {
    return true;
  }

  router.navigateByUrl('/groups');
  return false;
};
