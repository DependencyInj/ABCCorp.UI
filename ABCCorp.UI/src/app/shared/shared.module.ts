import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TileComponent } from './components/tile/tile.component';
import { HeaderComponent } from './components/header/header.component';



@NgModule({
  declarations: [
    TileComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    TileComponent,
    HeaderComponent
  ]
})
export class SharedModule { }
