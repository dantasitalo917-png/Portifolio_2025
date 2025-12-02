const fila = new PriorityQueue();

function adicionarPaciente() {
    // pega os valores do html
    let nome = document.getElementById('nome').value;
    let prioridade = parseInt(document.getElementById('prioridade').value);
    if (nome === "") {
        alert("por favor digite o nome do paciente.");
        return;
    }
    fila.enqueue(nome, prioridade);

    // limpa o campo e atualiza a lista na tela
    document.getElementById('nome').value ="";
    atualizarListaNaTela();
}
