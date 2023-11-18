import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaveLoadersFastComponent } from '@shared/heave-loaders/heave-loaders-fast.component';
import { TitleComponent } from '@shared/title/title.component';

@Component({
  selector: 'app-defer-options',
  standalone: true,
  imports: [CommonModule, HeaveLoadersFastComponent, TitleComponent ],
  templateUrl: './defer-options.component.html',
  styleUrl: './defer-options.component.css'
})
export default class DeferOptionsComponent {

}
