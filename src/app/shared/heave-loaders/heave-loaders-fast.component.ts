import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-heave-loaders-fast',
  standalone: true,
  imports: [CommonModule],
  template: `
    	<section [ngClass]="['w-full', cssClass]">

        <ng-content />

      </section>
  `
})
export class HeaveLoadersFastComponent {

  @Input({ required: true }) cssClass!: string;

  constructor() {
    console.log('Heavy Loader fast creado');

  }

}
