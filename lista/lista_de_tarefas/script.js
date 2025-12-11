const minhaLista = new ArrayList();

function adicionar() {
    let input = document.getElementById('novaTarefa');
    let tarefa = input.value;
    if (tarefa === "") {
        alert("Digite uma tarefa");
        return;
    }

    // usa o metodo append da class para adicionar no final
    minhaLista.append(tarefa);

    input.value = ""; //limpa o campo
    atualizarTela();
}

function removerTarefa(posicao) {
    // 3. usa o metodo REMOVEAT da classe para tirar pela posição indice
    minhaLista.removeAt(posicao);
    
    atualizarTela();
}

function atualizarTela() {
    let ul = document.getElementById('lista-visual');
    ul.innerHTML = ""; // Limpa a lista visual 

    // acessa o array interno da classe para exibir
    let tarefas = minhaLista.items;

    for (let i = 0; i < tarefas.length; i++) {
        let textoTarefa = tarefas[i];

        let li = document.createElement('li');
        
        // Coloca o texto da tarefa e um botao de excluir
        // O botão chama a função removerTarefa passando o indice i
        li.innerHTML = `
            <span>${textoTarefa}</span>
            <button class="btn-delete" onclick="removerTarefa(${i})">Excluir</button>
        `;

        ul.appendChild(li);
    }

    // Usa o SIZE da classe para mostrar o total
    document.getElementById('contador').innerText = "Total: " + minhaLista.size();
}