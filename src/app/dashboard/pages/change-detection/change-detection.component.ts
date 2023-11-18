import { ChangeDetectionStrategy, Component, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TitleComponent } from '@shared/title/title.component';

@Component({
  standalone: true,
  imports: [ CommonModule, TitleComponent ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './change-detection.component.html',
  styleUrl: './change-detection.component.css'
})
export default class ChangeDetectionComponent {

  public currentFramework = computed(
    () => `Change detection - ${ this.frameworkAsSignal().name }`
  )

  public frameworkAsSignal = signal({
    name: 'Angular',
    releaseDate: 2016
  });

  public frameworkAsProperty = {
    name: 'Angular',
    releaseDate: 2016
  };

  constructor() {
    setTimeout(() => {

      // this.frameworkAsProperty.name = 'React';
      // this.frameworkAsSignal.update( value => ({
      //   ...value,
      //   name: 'React'
      // }));
      this.frameworkAsSignal.update( value => {
        value.name = 'React';
        return {...value}
      });

      console.log('Hecho!');

    }, 3000);
  }

}
