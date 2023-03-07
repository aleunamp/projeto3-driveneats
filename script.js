let seletorPrato;

function selecionarPrato(classeBotao) {

    const botaoSelecionado = document.querySelector('.pratos .selecionado');
    const iconeSelecionado = document.querySelector('.pratos .aparecer');

    if (botaoSelecionado !== null) {
        botaoSelecionado.classList.remove('selecionado');
    }

    if (iconeSelecionado !== null) {
        iconeSelecionado.classList.remove('aparecer');
    }

    seletorPrato = '.' + classeBotao;
    const botao = document.querySelector(seletorPrato);
    botao.classList.add('selecionado');

    const icone = document.querySelector(seletorPrato + ' .icone');
    icone.classList.add('aparecer');

    habilitaFecharPedido();
}

let seletorBebida;

function selecionarBebida(classeBotao) {

    const botaoSelecionado = document.querySelector('.bebidas .selecionado');
    const iconeSelecionado = document.querySelector('.bebidas .aparecer');

    if (botaoSelecionado !== null) {
        botaoSelecionado.classList.remove('selecionado');
    }

    if (iconeSelecionado !== null) {
        iconeSelecionado.classList.remove('aparecer');
    }

    seletorBebida = '.' + classeBotao;
    const botao = document.querySelector(seletorBebida);
    botao.classList.add('selecionado');

    const icone = document.querySelector(seletorBebida + ' .icone');
    icone.classList.add('aparecer');

    habilitaFecharPedido();

}

let seletorSobremesa;

function selecionarSobremesa(classeBotao) {

    const botaoSelecionado = document.querySelector('.sobremesas .selecionado');
    const iconeSelecionado = document.querySelector('.sobremesas .aparecer');

    if (botaoSelecionado !== null) {
        botaoSelecionado.classList.remove('selecionado');
    }

    if (iconeSelecionado !== null) {
        iconeSelecionado.classList.remove('aparecer');
    }

    seletorSobremesa = '.' + classeBotao;
    const botao = document.querySelector(seletorSobremesa);
    botao.classList.add('selecionado');

    const icone = document.querySelector(seletorSobremesa + ' .icone');
    icone.classList.add('aparecer');

    habilitaFecharPedido();

}

function habilitaFecharPedido() {
    const textoBotao = document.querySelector('.botao-fechar-pedido p');
    const botao = document.querySelector('.botao-fechar-pedido');

    if (seletorPrato !== undefined) {
        if (seletorBebida !== undefined) {
            if (seletorSobremesa !== undefined) {
                textoBotao.innerHTML = "Fechar pedido";
                botao.classList.add('botao-selecionado');
            }
        }
    }
}

let gastoTotal;

function fecharPedido() {
    const prato = (document.querySelector(seletorPrato + ' h1').innerHTML);
    const bebida = (document.querySelector(seletorBebida + ' h1').innerHTML);
    const sobremesa = (document.querySelector(seletorSobremesa + ' h1').innerHTML);

    const precoPrato = Number(((document.querySelector(seletorPrato + ' .preco').innerHTML).replace(',', '.')));
    const precoBebida = Number(((document.querySelector(seletorBebida + ' .preco').innerHTML).replace(',', '.')));
    const precoSobremesa = Number(((document.querySelector(seletorSobremesa + ' .preco').innerHTML).replace(',', '.')));
    gastoTotal = (precoPrato + precoBebida + precoSobremesa).toFixed(2);

    mensagem = `Olá, gostaria de fazer o pedido:
    - Prato: ${prato}
    - Bebida: ${bebida}
    - Sobremesa: ${sobremesa}
    Total: ${gastoTotal}`

    open('https://wa.me/5521993718193?text=' + encodeURIComponent(mensagem));
}
