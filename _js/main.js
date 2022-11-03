var lista_usuarios = new ListaUsuarios();

$(document).ready((e) => {

    // Index
    $("#index-btn-login").click((e) => {
        window.location.href = "./_views/login.html";
    });

    //Pagina Resenhas
    $("#btn-resenha").click((e) => {
        $('#destaque').hide();
        getPagina("_html/resenha.html", 'main');
    });

    // Logoff
    $(".btn-logoff").click((e) => {
        removeItem(USER_LOGADO);
        window.location.href = "../index.html";
    });

    // Modal
    $(".btn-login").click((e) => {
        $("#modal-login").modal("toggle");
    });

    $(".btn-cadastro").click((e) => {
        $("#modal-cadastro").modal("toggle");
    });

    $(".bclose").click((e) => {
        $(".modal").modal("hide");
    });

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
            new ListaFilmes()
        );

        try {
            lista_usuarios.usuarios.push(usuario);
        } catch {
            lista_usuarios.push(usuario);
        }

        setJsonItem(LISTA_USUARIOS, lista_usuarios);
        $("#modal-cadastro").modal("hide");
    });

    // Login
    $("#btn-logar").click((e) => {
        if (getJsonItem(LISTA_USUARIOS)) {
            getJsonItem(LISTA_USUARIOS).usuarios.forEach(user => {
                if ($("#email-login-input").val() === user.email &&
                    $("#senha-login-input").val() === user.senha) {

                    

                    console.log(user.listaFilmes)

                    let lista_filmes = user.listaFilmes;

                    let usuario_logado = new Usuario(
                        user.id,
                        user.nome,
                        user.email,
                        user.senha,
                        lista_filmes
                    );

                    setJsonItem(USER_LOGADO, usuario_logado);
                    $("#modal-login").modal("hide");
                    window.location.href = "../_views/dashboard.html";
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