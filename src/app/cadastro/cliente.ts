export class Cliente {
  id?: string;
  nome?: string;
  email?: string;
  cpf?: string;
  dataNascimento?: Date;

  static newCliente() {
    return new Cliente();
  }

}
