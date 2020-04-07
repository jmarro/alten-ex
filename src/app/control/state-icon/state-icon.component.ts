import { Component, Input, OnChanges } from '@angular/core';
import { PiecesService } from '../../services/pieces.service';

@Component({
  selector: 'app-state-icon',
  templateUrl: './state-icon.component.html',
  styleUrls: ['./state-icon.component.scss']
})
export class StateIconComponent implements OnChanges {

  constructor(private piecesService: PiecesService) { }
  @Input() public control: any;
  public iconClass: string;

  ngOnChanges(): void {
    this.iconClass = this.piecesService.getIconClass( this.piecesService.getStatus(this.control));
  }



}
