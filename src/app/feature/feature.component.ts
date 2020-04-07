import { Component, OnInit, Input } from '@angular/core';
import { PiecesService } from '../services/pieces.service';

@Component({
  selector: 'app-feature',
  templateUrl: './feature.component.html',
  styleUrls: ['./feature.component.scss']
})
export class FeatureComponent implements OnInit {

  @Input() public feature: any;

  public featureStatus: string;
  public featureIcon: string;

  constructor(private piecesService: PiecesService) { }

  ngOnInit(): void {
    this.featureStatus = this.getFeatureStatus();
    this.featureIcon = this.piecesService.getIconClass(this.featureStatus);
  }

  public getFeatureStatus(): string {
    const err = this.feature.controls.some((control) => this.piecesService.getStatus(control) === 'error');
    if(err) return 'error';
    const warn = this.feature.controls.some((control) => this.piecesService.getStatus(control) === 'warning');
    if(warn) return 'warning';
    return 'success';
  }

}
