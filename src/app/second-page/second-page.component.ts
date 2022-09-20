import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-second-page',
  standalone: true,
  imports: [CommonModule],
  template: `
    <p>
      second-page works!
    </p>
  `,
  styles: [
  ]
})
export class SecondPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
