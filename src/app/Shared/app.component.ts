import { AccountService } from './../services/account.service';
import { Component } from '@angular/core';
import { SlimLoadingBarService } from "ng2-slim-loading-bar";
import { from } from 'rxjs';
import { NavigationCancel, Event, NavigationEnd, NavigationError, NavigationStart, Route, Router } from "@angular/router";
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = "angularCrud-u";

  /**
   *
   */
  // tslint:disable-next-line:variable-name
  constructor(private _loadingBar: SlimLoadingBarService, private _router: Router, private accountService: AccountService) {
    this._router.events.subscribe((event: Event) => {
      this.navigationInterceptor(event);
    });
  }
  private navigationInterceptor(event: Event): void {
    if (event instanceof NavigationStart) {
      this._loadingBar.start();
    }
    if (event instanceof NavigationEnd) {
      this._loadingBar.complete();
    }
    if (event instanceof NavigationCancel) {
      this._loadingBar.stop();
    }
    if (event instanceof NavigationError) {
      this._loadingBar.stop();
    }
  }

  logout() {

    this.accountService.signoutAccount().subscribe(
      (result: any) => {
        localStorage.removeItem('userAccessToken');
        localStorage.removeItem("userRefreshToken");
        this._router.navigate(['/login']);
      },
      (err: HttpErrorResponse) => {
        console.log(err.error.message);
        // this.message = err.error.message;
      });
  }

}
