import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlayerRoutingModule } from './player-routing.module';
import { PlayerComponent } from './components/player/player.component';
import { PlayerContentListComponent } from './components/player-content-list/player-content-list.component';
import { QumlLibraryModule } from '@project-sunbird/sunbird-quml-player-v9';


@NgModule({
  declarations: [
    PlayerComponent,
    PlayerContentListComponent
  ],
  imports: [
    CommonModule,
    // QumlLibraryModule,
    PlayerRoutingModule
  ],
  providers: []
})
export class PlayerModule { }
