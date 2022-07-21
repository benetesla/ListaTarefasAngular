import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tarefa';
  tarefas = [{
    nome: 'Comprar pão',
    concluida: false
  }, {
    nome: 'Comprar leite',
    concluida: false
  }, {
    nome: 'Comprar ovo',
    concluida: false
  }, {
    nome: 'Comprar azeite',
    concluida: false
  }, {
    nome: 'Comprar ovo',
    concluida: false
  }, {
    nome: 'Comprar azeite',
    concluida: false
  }, {
    nome: 'Comprar ovo',
    concluida: false
  }, {
    nome: 'Comprar feijao',
    concluida: false
  

  }]
  //remover tarefas
  remover(tarefa: { nome: string, concluida: boolean }) {
    const indice = this.tarefas.indexOf(tarefa);
    this.tarefas.splice(indice, 1);
  }
  

 
}
