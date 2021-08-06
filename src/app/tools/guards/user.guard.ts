import {Injectable} from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import {Observable} from 'rxjs';

@Injectable()
export class UserGuard implements CanActivate {
  constructor(
    private authService: AuthService,
    private router: Router
  ) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot)
    : Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    if ( this.authService.isAuthenticated() ) {
      return true; // On peut passer
    } else {
      this.router.navigate(['/login'])
        .then(_ => alert('Vous devez être authentifié.e pour accéder à cette ressource'));
      return false; // On peut pas passer
    }
  }


}
