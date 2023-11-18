import { Component, inject, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { toSignal } from '@angular/core/rxjs-interop';
import { TitleComponent } from '@shared/title/title.component';
import { ActivatedRoute } from '@angular/router';
import { User } from '../../../interfaces/req-response';
import { UsersService } from '../../../services/users.service';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CommonModule, TitleComponent ],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export default class UserComponent {

  private route = inject( ActivatedRoute );
  private usersServices = inject( UsersService );


  // public user = signal<User | undefined>( undefined );
  public user = toSignal(
    this.route.params.pipe(
      switchMap( ({ id }) =>  this.usersServices.getUserById( id )),
    )
  )

  public titleLabel = computed(() => {
    return this.user()
    ? `Información del usuario ${ this.user()?.first_name } ${ this.user()?.last_name }`
    : 'Información del usuario'

    // if( this.user() ) {
    //   return `Información del usuario ${ this.user()?.first_name } ${ this.user()?.last_name }`;
    // }
    // return 'Información del usuario';
  })


  // constructor() {
  //   this.route.params.subscribe( params => {
  //     console.log(params);
  //   });
  // }

}
