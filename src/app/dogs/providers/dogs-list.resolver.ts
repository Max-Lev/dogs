import { inject } from '@angular/core';
import { ResolveFn, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { DogsService } from './dogs.service';

export const dogsListResolver: ResolveFn<Observable<string[]>> =
  (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
    return inject(DogsService).getDogsList$();
  };
