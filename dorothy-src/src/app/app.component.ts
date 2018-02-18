import {
  Component,
  OnInit
} from '@angular/core';
import {
  Message
} from '@app/models';

import {MatSidenavModule} from '@angular/material/sidenav';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor() {}

  ngOnInit() { }

}

