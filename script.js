let seletor1;

function selecionarPrato(classeBotao){

    const botaoSelecionado = document.querySelector('.pratos .selecionado');
    const iconeSelecionado = document.querySelector('.pratos .aparecer');

    if (botaoSelecionado !== null){
        botaoSelecionado.classList.remove('selecionado');
    }

    if(iconeSelecionado !== null){
      iconeSelecionado.classList.remove('aparecer');
    }

    seletor1 = '.'+classeBotao;    
    const botao = document.querySelector(seletor1);
    botao.classList.add('selecionado');

    const icone = document.querySelector(seletor1 + ' .icone');
    icone.classList.add('aparecer');

    habilitaFecharPedido();
}

let seletor2;

function selecionarBebida(classeBotao){

    const botaoSelecionado = document.querySelector('.bebidas .selecionado');
    const iconeSelecionado = document.querySelector('.bebidas .aparecer');

    if ( botaoSelecionado !== null){
        botaoSelecionado.classList.remove('selecionado');
    }

    if(iconeSelecionado !== null){
        iconeSelecionado.classList.remove('aparecer');
    }

    seletor2 = '.'+classeBotao;    
    const botao = document.querySelector(seletor2);
    botao.classList.add('selecionado');

    const icone = document.querySelector(seletor2 + ' .icone');
    icone.classList.add('aparecer');

    habilitaFecharPedido();

}

let seletor3;

function selecionarSobremesa(classeBotao){

    const botaoSelecionado = document.querySelector('.sobremesas .selecionado');
    const iconeSelecionado = document.querySelector('.sobremesas .aparecer');

    if ( botaoSelecionado !== null){
        botaoSelecionado.classList.remove('selecionado');
    }

    if(iconeSelecionado !== null){
        iconeSelecionado.classList.remove('aparecer');
    }

    seletor3 = '.'+classeBotao;    
    const botao = document.querySelector(seletor3);
    botao.classList.add('selecionado');

    const icone = document.querySelector(seletor3 + ' .icone');
    icone.classList.add('aparecer');

    habilitaFecharPedido();

}

function habilitaFecharPedido(){
    const novoBotao1 = document.querySelector('.botao-fechar-pedido p');
    const novoBotao2 = document.querySelector('.botao-fechar-pedido');

    if (seletor1 !== undefined){
        if (seletor2 !== undefined){
            if (seletor3 !== undefined){
                novoBotao1.innerHTML = "Fechar pedido";
                novoBotao2.classList.add('botao-selecionado');
            }
        }
    }
}

let soma;

function fecharPedido(){
    const prato = (document.querySelector(seletor1 + ' h1').innerHTML);
    const bebida = (document.querySelector(seletor2 + ' h1').innerHTML);
    const sobremesa = (document.querySelector(seletor3 + ' h1').innerHTML);

    const preco1 = Number(((document.querySelector(seletor1 + ' .preco').innerHTML).replace(',','.')));
    const preco2 = Number(((document.querySelector(seletor2 + ' .preco').innerHTML).replace(',','.')));
    const preco3 = Number(((document.querySelector(seletor3 + ' .preco').innerHTML).replace(',','.')));
    soma = (preco1 + preco2 + preco3).toFixed(2);

    mensagem = `Olá, gostaria de fazer o pedido:
    - Prato: ${prato}
    - Bebida: ${bebida}
    - Sobremesa: ${sobremesa}
    Total: ${soma}`

    open('https://wa.me/5521993718193?text=' + encodeURIComponent(mensagem));
}
