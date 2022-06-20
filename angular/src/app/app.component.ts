import { Component } from '@angular/core';
import {MenubarModule} from 'primeng/menubar';
import {Button} from "primeng/button";
import {MenuItem} from 'primeng/api';
import {MenuModule} from 'primeng/menu';
import {MegaMenuItem} from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular';
  items!: MenuItem[];

  ngOnInit() {
    this.items = [{
      label: 'File',
      command: event => { console.log('Button was clicked')}
    },
      {
        label: 'Edit',
        items: [
          {label: 'Undo', icon: 'pi pi-refresh'},
          {label: 'Redo', icon: 'pi pi-repeat'}
        ]
      }];
  }
}
