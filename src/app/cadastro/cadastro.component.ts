import {Component, inject} from '@angular/core';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MatCardModule} from '@angular/material/card';
import {FormsModule} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatIcon} from '@angular/material/icon';
import {MatFabButton} from '@angular/material/button';
import {Cliente} from './cliente';
import {ClienteService} from '../cliente.service';

@Component({
  selector: 'app-cadastro',
  imports: [FlexLayoutModule, MatCardModule, FormsModule, MatFormFieldModule, MatInputModule, MatIcon, MatFabButton],
  templateUrl: './cadastro.component.html',
  styleUrl: './cadastro.component.scss'
})
export class CadastroComponent {
  cliente : Cliente = Cliente.newCliente();
  clienteService = inject(ClienteService);

  salvar() {
    this.clienteService.salvar(this.cliente);
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
