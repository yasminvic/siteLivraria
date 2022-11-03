var lista_usuarios = new ListaUsuarios();

$(document).ready(() => {

    // Página Login
    $("#index-btn-login").click((e) => {
        $('#destaque').hide();
        getPagina("_html/login.html", 'main');
    });

<<<<<<< HEAD
    $("#btn-romance").click((e) => {
        $('#destaque').hide();
        getPagina("_html/romance.html", 'main');
    });

    $("#btn-terror").click((e) => {
        $('#destaque').hide();
        getPagina("_html/terror.html", 'main');
    });

    $("#btn-culinaria").click((e) => {
        $('#destaque').hide();
        getPagina("_html/culinaria.html", 'main');
    });

=======

    // Pagina Terror
    $("#terror-btn").click((e) => {
        $('#destaque').hide();
        getPagina("_html/terror.html", 'main');
    });
    
>>>>>>> b4d837ed3ba3a9195b1930b49fe58214b57de353
    //Pagina Resenhas
    $("#btn-resenha").click((e) => {
        $('#destaque').hide();
        getPagina("_html/resenha.html", 'main');
    });

    // Modal
    $(".btn-login").click((e) => {
        $("#modal-login").modal("toggle"); // Abre modal login
    });

<<<<<<< HEAD


    $('.btn-cadastro').click((e)=>{
=======
    $('.btn-cadastro').click((e) => {
>>>>>>> b4d837ed3ba3a9195b1930b49fe58214b57de353
        $('#modal-cadastro').modal("toggle");
    });

    $('.bclose').click((e) => { //fecha todos os modais
        $('.modal').modal('hide');
    })

    // Cadastro
    $("#btn-cadastrar").click((e) => {
        if (getJsonItem(LISTA_USUARIOS)) {
            lista_usuarios = getJsonItem(LISTA_USUARIOS);
        }

        let tamLista = lista_usuarios == null ? 0 : lista_usuarios.usuarios.length;
        let idInsert = tamLista + 1;

        let usuario = new Usuario(
            idInsert,
            $("#nome-cadastro-input").val(),
            $("#email-cadastro-input").val(),
            $("#senha-cadastro-input").val(),
            new Array()
        );

        try {
            lista_usuarios.usuarios.push(usuario);
        } catch {
            lista_usuarios.push(usuario);
        }

        setJsonItem(LISTA_USUARIOS, lista_usuarios);
        $("#modal-cadastro").modal("hide");
    });

    //Login
    $('#btn-logar').click((e) => {
        console.log(getJsonItem(LISTA_USUARIOS).usuarios)
        if (getJsonItem(LISTA_USUARIOS)) {
            getJsonItem(LISTA_USUARIOS).usuarios.forEach(user => {
                if ($("#email-login-input").val() === user.email &&
                    $("#senha-login-input").val() === user.senha) {

                    let lista_resenhas = user.resenhas;

                    let usuario_logado = new Usuario(
                        user.id,
                        user.nome,
                        user.email,
                        user.senha,
                        lista_resenhas
                    );

                    setJsonItem(USER_LOGADO, usuario_logado);
                    $("#modal-login").modal("hide");
                    // window.location.href = ""  
                }
            });
        }
    });

});


//FUNCTIONS
var getPagina = (page, target) => {
    $.ajax({
        url: page,
        datatype: 'html',
        success: (data) => {
            $(target).html(data);
        }
    })
};

<<<<<<< HEAD



var VerificarLogin = () =>{
=======
var VerificarLogin = () => {
>>>>>>> b4d837ed3ba3a9195b1930b49fe58214b57de353
    let nome = $('#nome-cadastro-input').val();
    let email = $('#email-cadastro-input').val();
    let senha = $('#senha-cadastro-input').val();

    if (email == "" || senha == "" || nome == "") {
        return false;
    } else {
        return VerificaEmail(email);
    }
};

var VerificaEmail = (email) => {
    let regexEmail = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/gi;

    if (regexEmail.test(email)) {
        return true;
    } else {
        return false;
    }
}