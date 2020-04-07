import { PiecesService } from './services/pieces.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public piece;

  constructor(private piecesService: PiecesService) {
    this.piecesService.getPiece().subscribe((result)=> {
      this.piece = result;
    });
  }
}
