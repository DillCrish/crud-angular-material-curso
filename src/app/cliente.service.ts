import {Injectable} from '@angular/core';
import {Cliente} from './cadastro/cliente';

@Injectable({
    providedIn: 'root'
})
export class ClienteService {

    static REPO_CLIENTS = "_clientes";

    salvarCliente(cliente: Cliente) {
        console.log('salvar log')
        cliente.id = crypto.randomUUID();
        this.getClientesFromStorage().push(cliente);
        this.syncLocalStorage([]);
    }

    atualizarCliente(cliente: Cliente) {
        console.log("atualizando o cliente" + cliente.nome);
        let findClienteUpdate = this.getClientesFromStorage();
        findClienteUpdate.forEach(c => {
            if (c.id === cliente.id) {
                Object.assign(c, cliente);
            }
        })
        this.syncLocalStorage([...findClienteUpdate]);
    }

    pesquisarCliente(nome: string): Cliente[] {
        let findCliente = this.getClientesFromStorage();
        if (!nome) {
            return this.getClientesFromStorage();
        }
        return findCliente.filter(cliente => cliente.nome?.toLowerCase().includes(nome.toLowerCase()));
    }

    pesquisarClienteById(id: string): Cliente[] {
        let findCliente = this.getClientesFromStorage();
        if (!id) {
            return this.getClientesFromStorage();
        }
        return findCliente.filter(cliente => cliente.id?.toLowerCase().includes(id.toLowerCase()));
    }

    private getClientesFromStorage(): Cliente[] {
        const repositoryClientes = localStorage.getItem(ClienteService.REPO_CLIENTS);
        if (repositoryClientes) {
            return JSON.parse(repositoryClientes);
        }
        return [];
    }

    private syncLocalStorage(cliente : Cliente[]) {
        if (cliente.length === 0) {
            localStorage.setItem(ClienteService.REPO_CLIENTS, JSON.stringify(this.getClientesFromStorage()));
        } else {
            localStorage.setItem(ClienteService.REPO_CLIENTS, JSON.stringify(cliente));
        }
    }
}
