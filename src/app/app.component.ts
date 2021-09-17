import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

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
        
  }

  ngOnInit() {
    this.isBookmark = window.location.pathname === "/bookmarks"
  }

  navigateByURL(url: string) {
    this.isBookmark = !this.isBookmark;
    this.router.navigateByUrl(url);
  }
}
