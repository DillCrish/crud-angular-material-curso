import {Injectable} from '@angular/core';
import {Cliente} from './cadastro/cliente';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  static REPO_CLIENTS = "_clientes";

  constructor() { }

  salvar(cliente: Cliente) {
    const storage = this.getStorage();
    cliente.id = crypto.randomUUID();
    storage.push(cliente);
    localStorage.setItem(ClienteService.REPO_CLIENTS, JSON.stringify(storage));
  }

  getStorage(): Cliente[] {
    const repositoryClientes = localStorage.getItem(ClienteService.REPO_CLIENTS);
    if (repositoryClientes) {
      return JSON.parse(repositoryClientes);
    }
    const clientes: Cliente[] = [];
    localStorage.setItem(ClienteService.REPO_CLIENTS, JSON.stringify(clientes));
    return clientes;
  }
}
