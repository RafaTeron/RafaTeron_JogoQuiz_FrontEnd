import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Player } from '../../model/player'

@Injectable({
  providedIn: 'root'
})
export class PlayerService implements OnInit {

  players: Player[] = [];

  constructor(private HttpClient: HttpClient) {
    this.players = [];
  }

  ngOnInit() {

  }

}
