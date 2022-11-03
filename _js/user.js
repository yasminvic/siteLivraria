//chaves
const USER = "user";
const USER_LOGADO = "user_logado";
const LISTA_USUARIOS = "lista_usuarios";

class Usuario {
    constructor(id, nome, email, senha, lista_filmes) {
        this.id = id;
        this.nome = nome;
        this.email = email;
        this.senha = senha;
        this.listaFilmes = lista_filmes
    }
}

class ListaUsuarios {
    constructor() {
        this.usuarios = new Array();
    }
}