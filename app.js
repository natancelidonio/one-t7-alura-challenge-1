/* 
As "chaves" de criptografia que utilizaremos são:
A letra "e" é convertida para "enter"
A letra "i" é convertida para "imes"
A letra "a" é convertida para "ai"
A letra "o" é convertida para "ober"
A letra "u" é convertida para "ufat"
*/

let textoEntrada = document.getElementById('texto-entrada');
let textoSaída = document.getElementById('main__resultado');

function criptografar(){
    let texto = textoEntrada.value;
    let textoCripto = texto.replace(/e/g, 'enter').replace(/i/g, 'imes').replace(/a/g, 'ai').replace(/o/g, 'ober').replace(/u/g, 'ufat');

    document.getElementById('main__resultado').innerHTML = '<h2 id="titulo-resultado">Aqui está seu texto criptografado:</h2><br><textarea readonly id="main__resultado__texto-saida">' + textoCripto + '</textarea><br>' + '<button class="main__resultado__botao-copiar" id="copiar" onclick="copiar()">Copiar</button>';


    let imagem = document.getElementById('imagem-sem-texto');

    if (imagem.style.display === 'none') {
        imagem.style.display = 'block';
    } else {
        imagem.style.display = 'none';
    };
};

function descriptografar(){
    let texto = textoEntrada.value;
    
    let textoDescripto = texto.replace(/enter/g, 'e').replace(/imes/g, 'i').replace(/ai/g, 'a').replace(/ober/g, 'o').replace(/ufat/g, 'u');
    
    document.getElementById('main__resultado').innerHTML = '<h2 id="titulo-resultado">Aqui está seu texto descriptografado:</h2><br><textarea readonly id="main__resultado__texto-saida">' + textoDescripto + '</textarea><br>' + '<button class="main__resultado__botao-copiar" id="copiar" onclick="copiar()">Copiar</button>';

    let imagem = document.getElementById('imagem-sem-texto');
    
    if (imagem.style.display === 'none') {
        imagem.style.display = 'block';
    } else {
        imagem.style.display = 'none';
    };
};

function copiar(){
    let textoCop = document.querySelector('#main__resultado__texto-saida');

    textoCop.select();
    document.execCommand('copy');
    alert('Texto copiado.');
};