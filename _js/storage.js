const getItem = (key) =>{
    return localStorage.getItem(key); //pega item de dentro do local storage
} 

const getJsonItem = (key) =>{
    var obj = getItem(key);
    return JSON.parse(obj); //transforma item do local storage em tipo Json
}

const setItem = (key, value) =>{
    localStorage.setItem(key, value);
}

const setJsonItem = (key, value) =>{
    var obj = JSON.stringify(value); //transforma do tipo Json em string
    setItem(key, value); //chama função que setta isso
}
