import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlayerContentListComponent } from './components/player-content-list/player-content-list.component';
import { PlayerComponent } from './components/player/player.component';

const routes: Routes = [
  { path: 'content-list', component: PlayerContentListComponent },
  { path: 'play/:id', component: PlayerComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlayerRoutingModule { }
