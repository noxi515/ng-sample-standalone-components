import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { RouterLinkWithHref, RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    MatListModule,
    MatSidenavModule,
    RouterLinkWithHref,
    RouterOutlet,
    // RouterModule,
  ],
  template: `
    <mat-drawer-container>
      <mat-drawer mode="side" opened>
        <mat-nav-list>
          <a mat-list-item [routerLink]="['/']">Root Page</a>
          <a mat-list-item [routerLink]="['/', 'first']">First Page</a>
          <a mat-list-item [routerLink]="['/', 'second']">Second Page</a>
        </mat-nav-list>
      </mat-drawer>
      <mat-drawer-content>
        <main class="mat-app-background">
          <router-outlet></router-outlet>
        </main>
      </mat-drawer-content>
    </mat-drawer-container>
  `,
  styles: [`
    .mat-drawer-container {
      height: 100%;
    }

    .mat-drawer {
      width: 250px;
    }
  `]
})
export class AppComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

}
