import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-status-bar',
  templateUrl: './status-bar.component.html',
  styleUrls: ['./status-bar.component.scss']
})
export class StatusBarComponent {

  @Input() public title: string;
  @Input() public status: string;
  @Input() public icon: string;

}
