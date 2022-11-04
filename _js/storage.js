const getItem = (key) => {
    return localStorage.getItem(key);
}

const setItem = (key, value) => {
    localStorage.setItem(key, value);
}

const getJsonItem = (key) => {
    var obj = getItem(key);
    return JSON.parse(obj);
}

const removeItem = (key) => {
    localStorage.removeItem(key);
}

const setJsonItem = (key, value) =>{
    var obj = JSON.stringify(value); //transforma do tipo Json em string
    setItem(key, value); //chama função que setta isso
}

const updateUsuarios = (key, usuario) => {
    let lista_usuarios = getJsonItem(LISTA_USUARIOS);
    let i = lista_usuarios.usuarios.findIndex((user) => user.id === usuario.id)
    lista_usuarios.usuarios.splice(i, 1, usuario);

    setJsonItem(LISTA_USUARIOS, lista_usuarios);
}