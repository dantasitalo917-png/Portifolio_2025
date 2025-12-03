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

function chamarPaciente() {
    if (fila.isEmpty()) {
        alert("A fila está vazia!");
        return;
    }
    // Remove o primeiro da fila 
    let pacienteAtendido = fila.dequeue();
    
    document.getElementById('mensagem-atendimento').innerText = 
        "Atendendo agora: " + pacienteAtendido.value;
    atualizarListaNaTela();
}
function atualizarListaNaTela() {
    let lista = document.getElementById('lista-visual');
    lista.innerHTML = ""; // Limpa a lista antiga

    // Acessa o array .items da classe para mostrar na tela
    let pacientes = fila.items;

    for (let i = 0; i < pacientes.length; i++) {
        let p = pacientes[i];
        
        let itemLista = document.createElement('li');
        itemLista.innerText = p.value + " (Prioridade " + p.priority + ")";
        
        // Se for emergência deixa vermelho
        if (p.priority === 5) {
            itemLista.className = "destaque";
        }

        lista.appendChild(itemLista);
    }
}