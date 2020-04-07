import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-control-table',
  templateUrl: './control-table.component.html',
  styleUrls: ['./control-table.component.scss']
})
export class ControlTableComponent implements OnInit {

  @Input() public controls: any;

  constructor() { }

  ngOnInit(): void {
  }

}
