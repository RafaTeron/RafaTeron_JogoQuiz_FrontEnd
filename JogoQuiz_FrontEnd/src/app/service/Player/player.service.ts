import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Player } from '../../model/player'
import { Observable } from 'rxjs';

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

  conferirResposta(id: number, opcao: number): Observable<boolean> {
    const url = `${this.API}/${id}/conferirResposta`;
    return this.httpClient.get<boolean>(url, { params: { opcao: opcao.toString() } });
  }

  gerarQuetion(id:number) {
    const url = `${this.API}/${id}/gerarQuestion`;
    return this.httpClient.post<void>(url, {});
  }
}
