import {AfterViewInit, Component, inject, OnInit, ViewChild} from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MatIconModule} from '@angular/material/icon';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import {FormsModule} from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {ClienteService} from '../cliente.service';
import {Cliente} from '../cadastro/cliente';
import {CommonModule} from '@angular/common';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {Router} from '@angular/router';

@Component({
  selector: 'app-consulta',
    imports: [
        MatInputModule,
        MatCardModule,
        FlexLayoutModule,
        MatIconModule,
        MatTableModule,
        FormsModule,
        MatButtonModule,
        CommonModule,
        MatPaginatorModule
    ],
  templateUrl: './consulta.component.html',
  styleUrl: './consulta.component.scss'
})
export class ConsultaComponent implements OnInit, AfterViewInit {

    @ViewChild(MatPaginator) paginator?: MatPaginator;

    nomeBusca: string = '';
    listaClientePaginator = new MatTableDataSource<Cliente>()
    columnsTable: string[] = ['id', 'nome', 'cpf', 'email', 'dataNascimento', 'acoes'];

    private clienteService = inject(ClienteService);
    private router = inject(Router);

    ngOnInit() {
        console.log("passou aqui init")
        this.listaClientePaginator.data = this.clienteService.pesquisarCliente('');
    }

    ngAfterViewInit() {
        if (this.paginator) {
            this.listaClientePaginator.data = this.clienteService.pesquisarCliente('');
            this.listaClientePaginator.paginator = this.paginator;
            console.log(this.listaClientePaginator);
        } else {
            alert("DeuRuim")
            throw new Error('Paginator not found');
        }
    }

    pesquisarCliente() {
        this.listaClientePaginator.data = this.clienteService.pesquisarCliente(this.nomeBusca);
    }

    protected editarCliente(id: string) {
        void this.router.navigate(['/cadastro'], {queryParams: {"id": id}});
        console.log(id)
    }

}
