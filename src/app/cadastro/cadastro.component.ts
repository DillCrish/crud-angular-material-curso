import {Component} from '@angular/core';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MatCardModule} from '@angular/material/card';
import {FormsModule} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatIcon} from '@angular/material/icon';
import {MatFabAnchor, MatFabButton} from '@angular/material/button';
import {Cliente} from './cliente';

@Component({
  selector: 'app-cadastro',
  imports: [FlexLayoutModule, MatCardModule, FormsModule, MatFormFieldModule, MatInputModule, MatIcon, MatFabAnchor, MatFabButton],
  templateUrl: './cadastro.component.html',
  styleUrl: './cadastro.component.scss'
})
export class CadastroComponent {
  cliente : Cliente = Cliente.newCliente();

  salvar() {
    console.log(this.cliente);
  }

  limparCliente(cliente: Cliente) {
    cliente.id = '';
    cliente.nome = '';
    cliente.email = '';
    cliente.cpf = '';
    cliente.dataNascimento = new Date();
    console.log(cliente);
  }
}
