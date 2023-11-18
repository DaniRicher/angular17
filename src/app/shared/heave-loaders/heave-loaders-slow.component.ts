import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-heave-loaders-slow',
  standalone: true,
  imports: [CommonModule],
  template: `
  <section [ngClass]="['w-full h-[600px]', cssClass]">
    <h1>Hola Mundo</h1>
  </section>
  `
})
export class HeaveLoadersSlowComponent {

  @Input({ required: true }) cssClass!: string;

  constructor() {

    const start = Date.now();
    while ( Date.now() - start < 3000 ) {}
  }

}
