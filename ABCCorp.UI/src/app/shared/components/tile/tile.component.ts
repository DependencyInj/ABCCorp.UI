import { Component, Input } from '@angular/core';
import { Tile } from '../../models/Tile';

@Component({
  selector: 'app-tile',
  templateUrl: './tile.component.html',
  styleUrls: ['./tile.component.css']
})
export class TileComponent {
  @Input() tile!:Tile;

  ngOnChanges(){
    console.log("change", this.tile)
  }
}
