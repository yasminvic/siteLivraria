//chaves
const USER = "user";
const USER_LOGADO = "user_logado";
const LISTA_USUARIOS = "lista_usuarios";


class Usuario {
    constructor(id, nome, email, senha, resenhas) {
        this.id = id;
        this.nome = nome;
        this.email = email;
        this.senha = senha;
        this.resenhas = resenhas;
    }
}

class ListaUsuarios {
    constructor() {
        this.usuarios = new Array();
    }
}