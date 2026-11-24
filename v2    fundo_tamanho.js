var claridade = true;
var tamanhoFonte1 = 18;
var tamanhoFonte2 = 22;
var tamanhoFonte3 = 30;
function aumentarTamanho() {
    tamanhoFonte1 += 2;
    document.documentElement.style.setProperty('--tamanhoFonte1', tamanhoFonte1 + 'px');
    tamanhoFonte2 += 2;
    document.documentElement.style.setProperty('--tamanhoFonte2', tamanhoFonte2 + 'px');
    tamanhoFonte3 += 2;
    document.documentElement.style.setProperty('--tamanhoFonte3', tamanhoFonte3 + 'px');
}
function diminuirTamanho() {
    tamanhoFonte1 -= 2;
    document.documentElement.style.setProperty('--tamanhoFonte1', tamanhoFonte1 + 'px');
    tamanhoFonte2 -= 2;
    document.documentElement.style.setProperty('--tamanhoFonte2', tamanhoFonte2 + 'px');
    tamanhoFonte3 -= 2;
    document.documentElement.style.setProperty('--tamanhoFonte3', tamanhoFonte3 + 'px');
}
function mudarClaridade() {
    claridade = !claridade;
    if (claridade) {
        document.documentElement.style.setProperty('--cor1', '#e4e4e4');
        document.documentElement.style.setProperty('--cor2', '#181818');
    } else {
        document.documentElement.style.setProperty('--cor1', '#181818');
        document.documentElement.style.setProperty('--cor2', '#e4e4e4');
    }
}
