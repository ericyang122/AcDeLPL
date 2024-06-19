import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  TempMaio=0;
  TempJunho = 0;
  TempJulho= 0;
  TempAgosto=0
  valorFinal=0
  constructor(public router:Router) {}

  pinFormatter(value: number) {
    return `${value} dias`;
  }

  calcularTemp(){
    this.valorFinal=(this.TempAgosto + this.TempJulho +this.TempJunho + this.TempMaio)/4
    this.router.navigateByUrl
    (`/confirmar/${this.valorFinal}`);
  }

}
