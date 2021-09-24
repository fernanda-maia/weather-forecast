import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import * as moment from 'moment-timezone';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  isBookmark: boolean = true;
  title = 'weather-forecast';

  constructor(private router: Router,
              private activeRoute: ActivatedRoute) {
        
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
