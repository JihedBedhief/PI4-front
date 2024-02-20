import { Component } from '@angular/core';
import { NavigationEnd, Router, Event as RouterEvent } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PiDev';
  showNavbarAndFooter: boolean = true;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.router.events.pipe(
      // Properly use type assertion with the filter operator
      filter((event: RouterEvent): event is NavigationEnd => event instanceof NavigationEnd)
    ).subscribe((event: NavigationEnd) => {
      // Directly set the visibility based on the URL
      this.showNavbarAndFooter = event.urlAfterRedirects !== '/not-found';
    });
  }
}
