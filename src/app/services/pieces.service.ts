import { Injectable } from '@angular/core';
import { interval, Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class PiecesService {
  constructor() {}

  public mockData = [
    {
      name: 'Part A',
      features: [
        {
          name: 'Feature A',
          controls: [
            {
              name: 'x',
              dev: 0,
              devTotal: 0,
            },
            {
              name: 'y',
              dev: 40,
              devTotal: 20,
            },
          ],
        },
        {
          name: 'Feature B',
          controls: [
            {
              name: 'x',
              dev: 0,
              devTotal: 0,
            },
            {
              name: 'y',
              dev: 0,
              devTotal: 0,
            },
            {
              name: 'radio',
              dev: 10,
              devTotal: 50,
            },
          ],
        },
        {
          name: 'Feature C',
          controls: [
            {
              name: 'x',
              dev: 0,
              devTotal: 0,
            },
            {
              name: 'y',
              dev: 0,
              devTotal: 0,
            },
            {
              name: 'radio',
              dev: 0,
              devTotal: 50,
            },
          ],
        },
      ],
    },
    {
      name: 'Part B',
      radio: 2,
      center: 3,
    },
  ];

  public getPiece(): Observable<{}> {
    return interval(10000).pipe(
      startWith(0),
      map((index) => this.generatePiece(index))
    );
  }

  public getStatus(control): string {
    if (control.dev < control.devTotal - 5) {
      return 'success';
    } else {
      if (control.dev <= control.devTotal) {
        return 'warning';
      } else {
        return 'error';
      }
    }
  }

  public getIconClass(status): string {
    switch (status) {
      case 'success':
        return 'fa-check-circle-o';
      case 'warning':
        return 'fa-exclamation-circle';
      default:
        return 'fa-times-circle-o';
    }
  }

  private generatePiece(index) {
    const piece = {
      name: this.randomNameGenerator([
        'Piece a',
        'Piece b',
        'Piece c',
        'Piece d',
        'Piece e',
      ]),
      features: [],
    };
    const numberFeatures = Math.floor(Math.random() * 2) + 1;
    for (let i = 0; i < numberFeatures; i++) {
      piece.features.push(this.featureGenerator());
    }
    return piece;
  }

  private featureGenerator() {
    const feature = {
      name: this.randomNameGenerator(['Seam', 'Slot', 'Hole']),
      controls: [],
    };
    const numberControls = Math.floor(Math.random() * 9) + 1;
    for (let i = 0; i < numberControls; i++) {
      feature.controls.push(this.controlGenerator());
    }
    return feature;
  }

  private controlGenerator() {
    return {
      name: this.randomNameGenerator(['X', 'Y', 'Z', 'Diameter']),
      dev: Math.floor(Math.random() * 20),
      devTotal: Math.floor(Math.random() * 50),
    };
  }

  private randomNameGenerator(nameArray: Array<string>): string {
    return nameArray[Math.floor(Math.random() * nameArray.length)];
  }
}
