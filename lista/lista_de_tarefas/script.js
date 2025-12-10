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