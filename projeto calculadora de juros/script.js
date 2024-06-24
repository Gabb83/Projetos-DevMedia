function opcaoJuros() {
    // Capturar os valores dos inputs
    var capital = parseFloat(document.getElementById('capital').value);
    var taxa = parseFloat(document.getElementById('taxa').value);
    var tempo = parseFloat(document.getElementById('tempo').value);

    // Capturar a opção selecionada
    var opcao = document.getElementById('opcaoJuros').value;

    // Variáveis para armazenar os resultados
    var juros;
    var montante;

    // Verificar a opção selecionada e calcular os juros correspondentes
    if (opcao === 'opcaoJurosSimples') {
        // Cálculo de juros simples
        juros = (capital * taxa * tempo) / 100;
        montante = capital + juros;
    } else if (opcao === 'opcaoJurosCompostos') {
        // Cálculo de juros compostos
        montante = capital * Math.pow((1 + taxa / 100), tempo);
        juros = montante - capital;
    } else {
        // Caso a opção selecionada seja inválida (pode implementar um tratamento específico aqui)
        alert('Opção de juros inválida!');
        return;
    }

    // Atualizar os elementos na tabela com os resultados
    document.getElementById('mostraCapital').textContent = 'R$ ' + capital.toFixed(2);
    document.getElementById('mostraJuros').textContent = 'R$ ' + juros.toFixed(2);
    document.getElementById('mostraMontante').textContent = 'R$ ' + montante.toFixed(2);
}