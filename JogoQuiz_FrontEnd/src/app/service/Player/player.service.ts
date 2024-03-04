import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Player } from '../../model/player'

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  private readonly API = 'quiz/players';

  constructor(private httpClient: HttpClient) { }

  findById(id: number) {
    const url = `${this.API}/${id}`;
    return this.httpClient.get<Player>(url);
  }

}
