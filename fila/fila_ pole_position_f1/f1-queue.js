// Classe que representa um nó na fila de prioridade na F1
class Node {
  constructor(nome, tempo) {
    this.nome = nome;       // Valor do nó 
    this.tempo = tempo;     // Prioridade do nó o tempo da volta
  }
}

// Classe que representa a fila de prioridade Grid de Largada
class F1Queue {
  constructor() {
    this.items = []; // Array para armazenar os nós
  }

  // Método para adicionar um elemento na fila com uma prioridade
  enqueue(nome, tempo) {
    const newNode = new Node(nome, tempo);

    // Se a fila estiver vazia, simplesmente adiciona o novo nó
    if (this.isEmpty()) {
      this.items.push(newNode);
    } else {
      // Encontra a posição correta para inserir o novo nó com base na prioridade
      let added = false;
      for (let i = 0; i < this.items.length; i++) {
        // Se a prioridade do novo nó for maior que a do nó atual
        //Aqui no caso vou usar o < pois o menor tempo é igual a maior prioridade
        if (newNode.tempo < this.items[i].tempo) {
          this.items.splice(i, 0, newNode); // Insere na posição correta
          added = true;
          break;
        }
      }
      // Se o nó não foi adicionado, significa que ele tem a menor prioridade
      if (!added) {
        this.items.push(newNode); // Adiciona no final da fila
      }
    }
  }

  // Método para remover o elemento com a maior prioridade
  dequeue() {
    if (this.isEmpty()) {
      return 'A fila está vazia'; // Não há nada para remover
    }
    return this.items.shift(); // Remove e retorna o primeiro nó
  }

  // Método para verificar se a fila está vazia
  isEmpty() {
    return this.items.length === 0;
  }
}