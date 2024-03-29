import {Component} from '@angular/core';
import { navItems } from '../../_nav';

@Component({
  selector: 'app-dashboard',
  templateUrl: './default-layout.component.html'
})
export class DefaultLayoutComponent {
  minimized = false;
  public sidebarMinimized = false;
  public navItems = [...navItems];
  toggleMinimize(e) {
    this.minimized = e;
  }
}
