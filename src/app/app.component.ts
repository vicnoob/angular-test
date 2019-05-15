import { Component } from '@angular/core';
import styles from './styles.scss';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-test';

  constructor () {
    console.log(styles);
  }
}
