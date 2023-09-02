import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { LocalStorageService } from '../services/local-storage.service';

export const loginGuard: CanActivateFn = (route, state) => {
  let haveToken = inject(LocalStorageService).getJwtToken();
  if(route.routeConfig?.path && route.routeConfig.path.search("userLogin") != -1) {
    if(!haveToken) {
      return true;
    }
  } else if (route.routeConfig?.path && route.routeConfig.path.search("createArticle") != -1) {
    if(!haveToken) {
      inject(Router).navigateByUrl('/userLogin');
    }else {
      return true;
    }
  }
  return true;
};
