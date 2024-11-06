import { PlayerService } from './../../../service/Player/player.service';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Player } from '../../../model/player';
import { Router } from '@angular/router';

@Component({
  selector: 'app-quiz-painel',
  templateUrl: './quiz-painel.component.html',
  styleUrls: ['./quiz-painel.component.css']
})
export class QuizPainelComponent implements OnInit {

  id: number;
  playerFindById: Observable<Player>;

  selectedOption!: number | undefined;
  answerColors: { [key: number]: string } = {};

  atualHP: number = 100;

  timeoutId: any;
  countdownInterval: any;
  countdownValue: number = 60;
  countdownInProgress: boolean = false;

  showSpinner: boolean = false;
  showResult: boolean = false;
  showConferirResposta: boolean = true;
  showDescricao: boolean = false;

  constructor(private playerService: PlayerService, private changeDetectorRef: ChangeDetectorRef, private router: Router) {
    this.id = Number(localStorage.getItem('playerId'));
    this.playerFindById = this.playerService.findById(this.id);

    const storedHP = localStorage.getItem('atualHP');
    this.atualHP = storedHP ? Number(storedHP) : 100;
  }

  ngOnInit(): void {}

  checkAnswer() {
    if (!this.countdownInProgress) {
      if (this.selectedOption !== undefined && this.selectedOption !== null) {
        this.countdownInProgress = true;
        this.playerService.conferirResposta(this.id, this.selectedOption).subscribe({
          next: resposta => {
            const color = resposta ? 'correct-answer' : 'wrong-answer';
            this.answerColors[this.selectedOption!] = color;

            if (!resposta) {
              this.diminuirHP();
            }

            this.playerGerarQuestion();

            this.timeoutId = setTimeout(() => {
              this.atualizarQuestion();
              this.countdownInProgress = false;
            }, 60000);

            this.finishPerguntasRespondidas();
            this.startCountdown();

            this.showSpinner = true;
            this.showDescricao = true;
          },
          error: error => {
            console.error('Ocorreu um erro ao conferir a resposta:', error);
          }
        });
      } else {
        alert('Selecione uma opção antes de conferir a resposta.');
      }
    }
  }

  playerGerarQuestion() {
    this.playerService.gerarQuetion(this.id).subscribe({
      next: () => {},
      error: error => {
        console.error('Ocorreu um erro ao gerar a pergunta:', error);
        alert('Erro ao gerar a pergunta.');
      }
    });
  }

  atualizarQuestion() {
    this.selectedOption = undefined;
    this.playerFindById = this.playerService.findById(this.id);
    this.changeDetectorRef.detectChanges();
  }

  proximo() {
    if (this.timeoutId !== undefined) {
      clearTimeout(this.timeoutId);
    }

    if (this.countdownInterval !== undefined) {
      clearInterval(this.countdownInterval);
    }

    this.cancelCountdown();
    this.showSpinner = false;
    this.showDescricao = false;

    this.atualizarQuestion();
  }

  cancelCountdown() {
    clearInterval(this.countdownInterval);
    this.countdownInProgress = false;
  }

  finishPerguntasRespondidas() {
    this.playerService.verificarLimitePerguntasRespondidas(this.id)
      .subscribe((limite: boolean) => {
        if (limite === false) {
          this.showConferirResposta = false;
          this.showSpinner = false;
          this.showResult = true;
          this.atualizarQuestion();
        }
      });
  }

  resultado() {
    localStorage.removeItem('atualHP');
    this.router.navigate(['/Finish']);
  }

  getAnswerColor(answerId: number): string {
    return this.answerColors[answerId] || '';
  }

  startCountdown() {
    this.countdownValue = 60;
    this.countdownInterval = setInterval(() => {
      this.countdownValue--;
      this.changeDetectorRef.detectChanges();
      if (this.countdownValue <= 0) {
        clearInterval(this.countdownInterval);
        this.showDescricao = false;
        this.showSpinner = false;
      }
    }, 1000);
  }

  diminuirHP() {
    if (this.atualHP > 0) {
      this.atualHP -= 10;
      if (this.atualHP < 0) {
        this.atualHP = 0;
      }
      localStorage.setItem('atualHP', String(this.atualHP));
      this.shakeHPBar();
      this.changeDetectorRef.detectChanges();
    }
  }

  shakeHPBar() {
    const hpBar = document.querySelector('.hp-bar') as HTMLElement;
    hpBar.classList.add('shake');
    setTimeout(() => {
      hpBar.classList.remove('shake');
    }, 900);
  }

  getBackgroundImage(category: string): string {

    const imageMap: { [key: string]: string } = {
      'CIENCIA': 'assets/Categoria/Ciencia.jpg',
      'ESPORTE': 'assets/Categoria/Esporte.jpg',
      'ENTRETENIMENTO': 'assets/Categoria/Entretenimento.jpg',
      'HISTORIA': 'assets/Categoria/Historia.jpg',
      'GEOGRAFIA': 'assets/Categoria/Geografia.jpg',
      'ATUALIDADE': 'assets/Categoria/Atualidade.jpg',
      'TECNOLOGIA': 'assets/Categoria/Tecnologia.jpg',
      'MEIO_AMBIENTE': 'assets/Categoria/MeioAmbiente.jpg',
      'MITOS_E_LENDAS': 'assets/Categoria/MitosELendas.jpg',
      'CULINARIA': 'assets/Categoria/Culinaria.webp'
    };
    return imageMap[category] || 'assets/default.jpg';
  }
}
