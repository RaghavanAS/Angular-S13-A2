import { Component, Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot, CanActivate } from '@angular/router';


@Injectable()
export class AuthGuardComponent implements CanActivate {

    constructor(private _router: Router) { }
// Activates only when the access token exists in session storae
    canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        if (sessionStorage.getItem('access_token')) {
            return true;
        }
        this._router.navigate(['/login']);
        return false;
    }
}
