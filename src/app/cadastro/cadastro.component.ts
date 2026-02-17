import {Component, inject, OnInit, signal} from '@angular/core';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MatCardModule} from '@angular/material/card';
import {FormsModule} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatIcon} from '@angular/material/icon';
import {MatFabButton} from '@angular/material/button';
import {Cliente} from './cliente';
import {ClienteService} from '../cliente.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
    selector: 'app-cadastro',
    imports: [FlexLayoutModule, MatCardModule, FormsModule, MatFormFieldModule, MatInputModule, MatIcon, MatFabButton],
    templateUrl: './cadastro.component.html',
    styleUrl: './cadastro.component.scss'
})
export class CadastroComponent implements OnInit {

    cliente: Cliente = Cliente.newCliente();
    clienteService = inject(ClienteService);
    routeActivate = inject(ActivatedRoute);
    route = inject(Router);
    isEdit = signal(false);

    ngOnInit() {
        this.routeActivate.queryParams.subscribe(params => {
            const id = params['id'];
            if (id) {
                let findCliente = this.clienteService.pesquisarClienteById(id)[0];
                if (findCliente) {
                    this.cliente = findCliente;
                    this.isEdit.set(true);
                }
            }
        })
    }

    salvar() {
        if (this.isEdit()) {
            this.clienteService.atualizarCliente(this.cliente);
            void this.route.navigate(['/consulta']);
        } else {
            this.clienteService.salvarCliente(this.cliente);
            this.cliente = Cliente.newCliente();
        }
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
