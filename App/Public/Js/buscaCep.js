

// viacep.com.br/ws/RS/Porto Alegre/Domingos Jose/json/

let rua = document.querySelector('#rua');
let cidade = document.querySelector('#cidade');
let estado  = document.querySelector('#estado');
let btnCep = document.querySelector('#btnCep');
let list = document.querySelector('#list');



btnCep.addEventListener('click',function(e){
    e.preventDefault();
    // alert('estou funcionando');

    let urlBase = 'https://viacep.com.br/ws/';
    let parametros = estado.value +'/'+ cidade.value +'/'+ rua.value + '/json/';
    let callback = '?callback=NaoSeiMeuCep';


    let script = document.createElement('script');
    script.src = urlBase + parametros + callback;
    document.body.appendChild(script);

});

function NaoSeiMeuCep(request){


    if(!Array.isArray(request)){
        alert('Não foi possível retornar nenhum cep');
        return;
    }

     request.forEach(function(i){
        let li = document.createElement('li');
         let endereco = i.logradouro + ' | ' + i.bairro + ' | ' + i.localidade + ' | ' + i.uf + ' | ' + i.cep;
         li.innerHTML = endereco;
         li.setAttribute('onclick','exibirCep('+ i.cep.replace('-', '') +')');
        list.appendChild(li);

     });
}

function exibirCep(cep){
    alert('Seu cep é'+' '+ cep);
}