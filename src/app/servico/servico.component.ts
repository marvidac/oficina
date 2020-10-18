import { Component, OnInit } from '@angular/core';
import { Servico } from '../model/Servico';
import { SelectItem } from '../model/util/SelectItem';
import { StatusEnum } from '../model/StatusEnum';

@Component({
  selector: 'abe-servico',
  templateUrl: './servico.component.html',
  styleUrls: ['./servico.component.scss']
})
export class ServicoComponent implements OnInit {
  public servico: Servico;
  public statusOpt: SelectItem[];
  public status: number;

  constructor() { 
    this.servico = new Servico();
    
    this.statusOpt = [
      {label: 'Sim', value: StatusEnum.Ativo, selected: true},
      {label: 'Não', value: StatusEnum.Inativo, selected: false}
    ];
  }

  ngOnInit(): void {
  }
  salvar() {
    //Setando variável de controle se registro está ativo ou não
    this.servico.status = this.status;
    console.info("salvar");
  }

  reset() {
    this.servico = new Servico();
    console.info("reset");
  }

}
