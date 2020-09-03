export interface EntradaLogin {
  usuario: string;
  senha: string;
}

export interface RetornoLogin {
  token: string;
  id: number;
  usuario: string;
  email: string;
}
