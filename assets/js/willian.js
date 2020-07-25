/* exibir informaçõe campo : valor */
function escreva(){
    var nome = document.getElementById("nome").value;
    document.getElementById("id-nome").innerHTML = nome;

    var nome1 = document.getElementById("email").value;
    document.getElementById("id-email").innerHTML = nome1;

    var nome2 = document.getElementById("tell").value;
    document.getElementById("id-tell").innerHTML = nome2;

    var nome3 = document.getElementById("ass").value;
    document.getElementById("id-ass").innerHTML = nome3;

    var nome4 = document.getElementById("msg").value;
    document.getElementById("id-msg").innerHTML = nome4;
}
/* validaão forms */
$('.ui.form')
.form({
    fields: {
        ativo     : 'empty',
        ativo5 : 'empty',
        ativo3 : 'minLength[9]',
        ativo4 : 'empty',
        email : 'email'
    }
})
;
/* session storage */
function session(){
    sessionStorage.setItem("nome", nome.value);
    sessionStorage.setItem("email", email.value);    
    sessionStorage.setItem("telefone", tell.value);
    sessionStorage.setItem("assunto", ass.value);
    sessionStorage.setItem("mensagem", msg.value);
    
    alert("Itens adicionado.");
    /**/
}
