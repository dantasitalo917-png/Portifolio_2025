const gridF1 = new F1Queue();

function registrarVolta() {
    let piloto = document.getElementById('piloto').value;
    //pega o valor como texto primeiro para verificar se esta vazio
    let tempoTexto = document.getElementById('tempo').value;

    // verifica se o texto é vazio ou se o piloto é vazio
    if (piloto === ""||tempoTexto === "") {
        alert("Preencha o piloto e o tempo corretamente!");
        return;
    }
    // convertendo para decimal
    let tempo = parseFloat(tempoTexto);
    //a classe F1Queue vai ordenar automatico pelo menor tempo
    gridF1.enqueue(piloto, tempo);

    // limpa os campos
    document.getElementById('piloto').value = "";
    document.getElementById('tempo').value = "";
    atualizarGrid();
}

function largarCarro() {

}