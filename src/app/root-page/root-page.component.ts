import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root-page',
  standalone: true,
  imports: [CommonModule],
  template: `
    <p>
      root-page works!
    </p>
  `,
  styles: [
  ]
})
export class RootPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
