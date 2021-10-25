//var = escopo global
//let = escopo local
//const = escopo global que não varia

let nome = window.document.getElementById('nome')
let email = document.querySelector('#email')
let assunto = document.querySelector('#assunto')
let nomeOk = false;
let emailOk = false;
let assuntoOk = false;

function validaNome() {
    let txtNome = document.querySelector('#txtNome')
    if (nome.value.length < 3) {
        txtNome.innerHTML = 'nome inválido'
        txtNome.style.color = 'red'
    } else {
        txtNome.innerHTML = 'nome válido'
        txtNome.style.color = 'green'
        nomeOk = true;
    }
}

/*function validaEmail () {
    let txtEmail = document.querySelector('#txtEmail')

    if(email.value.indeOf('@') == -1 || email.value.indeOf('.') == -1) {
        txtEmail.innerHTML = 'e-mail inválido'
        txtEmail.style.color = 'red'
    } else {
        txtEmail.innerHTML = 'e-mail válido'
        txtEmail.style.color = 'green'
        emailOk = true;
    }
}*/

/* Outra maneira de validação de Email */
// ! Validação de E-mail com regex + match

function validaEmail() {
    const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if (email.value.match(mailformat)) {
    txtEmail.innerHTML = 'e-mail válido';
    txtEmail.style.color = 'green';
    emailOk = true;
    } else {
    txtEmail.innerHTML = 'e-mail inválido';
    txtEmail.style.color = 'red';
    }
}

function validaAssunto() {
    let txtAssunto = document.querySelector('#txtAssunto');

    if (assunto.value.length >= 200) {
        txtAssunto.innerHTML = 'digite no máximo 200 caracteres';
        txtAssunto.style.color = 'red';
        txtAssunto.style.display = 'block';
    } else {
        txtAssunto.style.display = 'none';
        assuntoOk = true;
    }
}

function enviar() {
    if (nomeOk == true && emailOk == true && assuntoOk == true) {
    alert('Formulário enviado com sucesso!');
    } else {
    alert('Preencha o formulário corretamente antes de enviar...');
    }
}

