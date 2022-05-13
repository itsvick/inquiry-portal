import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QumlPlayerConfig } from '@project-sunbird/sunbird-quml-player-v9/lib/quml-library-interface';
import { DataService } from 'src/app/services/data.service';
import { QuestionCursorImplementationService } from 'src/app/services/question-cursor-implementation.service';
import { SamplePlayerData } from './player-data';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss']
})
export class PlayerComponent implements OnInit {

  playerConfig: QumlPlayerConfig;
  constructor(
    private dataService: DataService, 
    private questionSetService: QuestionCursorImplementationService,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params: any) => {
      this.getContent(params.id);
    });
  }

  getContent(identifier: string) {
    this.questionSetService.getQuestionSet(identifier).subscribe(res => {
      this.initializePlayer(res);
    });
  }

  initializePlayer(metadata) {
    this.playerConfig = {
      context: SamplePlayerData.playerConfig.context,
      config: SamplePlayerData.playerConfig.config,
      metadata,
      data: {}
    };
  }

}
