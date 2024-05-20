import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Player } from '../../../model/player';
import { PlayerService } from '../../../service/Player/player.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-finish-painel',
  templateUrl: './finish-painel.component.html',
  styleUrl: './finish-painel.component.css'
})
export class FinishPainelComponent implements OnInit {

  id: number;
  selectedOption!: number;
  playerFindById: Observable<Player>;
  timeoutId: any;
  answerColors: { [key: number]: string } = {};

  constructor(private playerService: PlayerService, private router: Router) {
    this.id = 1;
    this.playerFindById = this.playerService.findById(this.id);
  }

  ngOnInit(): void {
  }
}
