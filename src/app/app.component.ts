import {AfterContentInit, AfterViewChecked, AfterViewInit, Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'MurphApp';
  currentPageTitle = 'Loading';

  showFiller = false;

  constructor(private router: Router) {}

  ngOnInit() {
    // We subscribe to router event to update the title
    this.router.events.subscribe(changed => {
      // Substringing the '/' and putting everything to uppercase
      this.currentPageTitle = this.router.url.substr(1, this.router.url.length).toUpperCase();
    });
  }
}
