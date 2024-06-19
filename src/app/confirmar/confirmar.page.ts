import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-confirmar',
  templateUrl: './confirmar.page.html',
  styleUrls: ['./confirmar.page.scss'],
})
export class ConfirmarPage implements OnInit {

  constructor(public ar:ActivatedRoute,
              public router:Router) { }
  
  valorFinal:any|undefined;
  frutas: string[] = []; 

  ngOnInit() {
   
    this.valorFinal=this.ar.snapshot.paramMap.get('valorFinal');
    this.frutas = this.getFrutasPorTemperatura(this.valorFinal);
  }

  getFrutasPorTemperatura(temp: number): string[] {
    // Esta função retorna uma lista de frutas com base na temperatura média
    if (temp <= 30 && temp >=25) {
      return ['Morango', 'Abacaxi', 'Banana', 'Manga'];
    } else if (temp <= 25 && temp >= 15) {
      return ['Maçã', 'Pêra', 'Uva', 'Pêssego'];
    } else if (temp <= 15 && temp >= 10) {
      return ['Laranja', 'Limão', 'Kiwi', 'Maracujá'];
    } else {
      return [' Não ha frutas que nasce nessa temperatura'];
    }
  }
}
