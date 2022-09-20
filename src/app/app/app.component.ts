import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    MatSidenavModule,
  ],
  template: `
    <mat-drawer-container>
      <mat-drawer mode="side" opened></mat-drawer>
      <mat-drawer-content>
        <main class="mat-app-background"></main>
      </mat-drawer-content>
    </mat-drawer-container>
  `,
  styles: [`
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
