var lista_usuarios = [];

$(document).ready(() => {

    // Index
    $("#index-btn-login").click((e) => {
        $('#destaque').hide();
        getPagina("_html/login.html", 'main');
    });

    // Pagina Terror
    $("#terror-btn").click((e) => {
        $('#destaque').hide();
        getPagina("_html/terror.html", 'main');
    });

    // Modal
    $(".btn-login").click((e) => {
        $("#modal-login").modal("toggle"); //abre modal login
    });

    $('.btn-cadastro').click((e)=>{
        $('#modal-cadastro').modal("toggle");
    });

    $('.bclose').click((e) =>{ //fecha todos os modais
        $('.modal').modal('hide');
    })

    //Login
    $('#btn-cadastrar').click((e) =>{
         if(VerificarLogin()){
            console.log("verificou");
            if(getJsonItem(LISTA_USUARIOS)){ // se retornar algo
                 lista_usuarios = getJsonItem(LISTA_USUARIOS);  //recebe todos os usuários do localStorage
            }

            let tamLista = lista_usuarios == null ? 0 : lista_usuarios.length;
            let idInsert = tamLista + 1; 

            let nome = $('#nome-cadastro-input').val();
            let senha = $('#senha-cadastro-input').val();
            let email = $('#email-cadastro-input').val() 

            user = new Usuario(idInsert, nome, senha, email);

            lista_usuarios.push(user);
            setJsonItem(LISTA_USUARIOS, lista_usuarios);
        };

    });

});



//FUNCTIONS
var getPagina = (page, target) => {
    $.ajax({
        url: page,
        datatype: 'html',
        success: (data) =>{
            $(target).html(data);
        }
    })
};

var VerificarLogin = () =>{
    let nome = $('#nome-cadastro-input').val();
    let email = $('#email-cadastro-input').val();
    let senha = $('#senha-cadastro-input').val();

    if(email == "" || senha == "" || nome == ""){
        return false;
    }else{
        return VerificaEmail(email);
    }
};

var VerificaEmail = (email) =>{
    let regexEmail = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/gi;

    if(regexEmail.test(email)){
        return true;
    }else{
        return false;
    }
}