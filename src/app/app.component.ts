import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import * as moment from 'moment-timezone';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  isBookmark: boolean = true;
  title = 'weather-forecast';

  constructor(private router: Router) {
     moment.locale('en-US');
  }

  ngOnInit() {
    this.isBookmark = window.location.pathname === "/bookmarks"
  }

  navigateByURL(url: string) {
    this.isBookmark = !this.isBookmark

    this.router.navigateByUrl(url);
  }

}

