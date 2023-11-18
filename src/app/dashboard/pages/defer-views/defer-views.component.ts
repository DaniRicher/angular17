import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaveLoadersSlowComponent } from '@shared/heave-loaders/heave-loaders-slow.component';
import { TitleComponent } from '@shared/title/title.component';

@Component({
  selector: 'app-defer-views',
  standalone: true,
  imports: [ CommonModule, HeaveLoadersSlowComponent, TitleComponent ],
  templateUrl: './defer-views.component.html',
  styleUrl: './defer-views.component.css'
})
export default class DeferViewsComponent {

}
