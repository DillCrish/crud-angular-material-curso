import {MatPaginator} from '@angular/material/paginator';

export class Cliente {
  id?: string;
  nome?: string;
  email?: string;
  cpf?: string;
  dataNascimento?: Date;
  paginator?: MatPaginator

  static newCliente() {
    return new Cliente();
  }

}
