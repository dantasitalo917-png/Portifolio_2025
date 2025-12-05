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
    if (gridF1.isEmpty()) {
        alert("O Grid está vazio!");
        return;
    }

    // Remove o primeiro a pole position
    let carro = gridF1.dequeue();
    
    document.getElementById('msg-largada').innerText = 
        "Largou: "+ carro.nome + " (" + carro.tempo + "s)";
    atualizarGrid();
}

function atualizarGrid() {
    let lista = document.getElementById('lista-grid');
    lista.innerHTML = "";

    let carros = gridF1.items;
    for (let i = 0; i < carros.length; i++) {
        let c = carros[i];
        
        let item = document.createElement('li');
        // mostra a posição i+1 nome e tempo
        item.innerHTML = `
            <span>${i + 1}: ${c.nome}</span>
            <span>${c.tempo}s</span>
        `;
        
        lista.appendChild(item);
    }
}