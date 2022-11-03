//chaves
const USER = "user";
const USER_LOGADO = "user_logado";
const LISTA_USUARIOS = "lista_usuarios";


class Usuario{
    constructor(id, nome, senha, email){
        this.id = id;
        this.nome = nome;
        this.senha = senha;
        this.email = email;
    }
}