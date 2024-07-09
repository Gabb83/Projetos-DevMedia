function abrirMenu() {
    document.getElementById("menu-lateral").style.width = "250px";
    document.getElementById("principal").style.marginLeft = "250px";
}

function fecharMenu() {
    document.getElementById("menu-lateral").style.width = "0";
    document.getElementById("principal").style.marginLeft = "0";
}

function incrementar(id) {
    var input = document.getElementById(id);
    input.value = parseInt(input.value) + 1;
}

function diminuir(id) {
    var input = document.getElementById(id);
    input.value = parseInt(input.value) - 1;
}

function calculaJurosSimples() {
    var capital = parseFloat(document.getElementById('capital').value);
    var taxa = parseFloat(document.getElementById('taxa').value);
    var tempo = parseFloat(document.getElementById('tempo').value);

    if (isNaN(capital) || isNaN(taxa) || isNaN(tempo)) {
        alert('Por favor, insira valores válidos.');
        return;
    }

    var juros = (capital * taxa * tempo) / 100;
    var montante = capital + juros;

    document.getElementById('mostraCapital').innerText = 'R$ ' + capital.toFixed(2);
    document.getElementById('mostraJuros').innerText = 'R$ ' + juros.toFixed(2);
    document.getElementById('mostraMontante').innerText = 'R$ ' + montante.toFixed(2);
}

function calculaJurosCompostos(){
    var capital = parseFloat(document.getElementById('capital').value);
    var taxa = parseFloat(document.getElementById('taxa').value);
    var tempo = parseFloat(document.getElementById('tempo').value);

    if (isNaN(capital) || isNaN(taxa) || isNaN(tempo)) {
        alert('Insira valores válidos');
        return;
    }

    var montante = capital * Math.pow((taxa / 100 + 1), tempo);
    var juros = montante - capital;
    
    document.getElementById('mostraCapital').innerText = 'R$ ' + capital.toFixed(2);
    document.getElementById('mostraJuros').innerText = 'R$ ' + juros.toFixed(2);
    document.getElementById('mostraMontante').innerText = 'R$ ' + montante.toFixed(2);
}