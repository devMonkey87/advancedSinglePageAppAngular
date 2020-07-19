import { User } from './classes/user'
import { Component, EventEmitter } from '@angular/core'
import { AuthService } from './services/auth.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app'
  user: User 
  resultado : string;

  constructor(
    private authService: AuthService
  ) {
    this.user = this.authService.getAuthUser()
  }

  isLoggedIn(): boolean {
    return this.authService.isLoggedIn()
  }

  logout() {
    this.authService.logout()
  }

  test() {
    this.authService.test()
  }

  emites(event){
    this.resultado = event;
    console.log('hola???',this.resultado);

   
    alert('hey baby  ' + this.resultado);
  }
}
