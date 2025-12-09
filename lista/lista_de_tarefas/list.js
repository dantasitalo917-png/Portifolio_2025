class ArrayList {
  constructor() {
    this.items = []; // Atributo para armazenar os elementos
  }

  // Adicionar elementos no final da lista
  append(element) {
    this.items.push(element);
  }

  // Inserir elementos em uma posição específica
  insert(position, element) {
    if (position >= 0 && position <= this.items.length) {
      this.items.splice(position, 0, element);
      return true;
    }
    return false;
  }

  // Remover um elemento da lista
  remove(element) {
    const index = this.indexOf(element);
    if (index !== -1) {
      this.removeAt(index);
      return true;
    }
    return false;
  }

  // Remover elementos em uma posição específica
  removeAt(position) {
    if (position >= 0 && position < this.items.length) {
      return this.items.splice(position, 1)[0];
    }
    return null;
  }

  // Retorna a posição de um dado elemento
  indexOf(element) {
    return this.items.indexOf(element);
  }

  // Retorna se a lista está vazia
  isEmpty() {
    return this.items.length === 0;
  }

  // Retorna o tamanho da lista
  size() {
    return this.items.length;
  }

  // Retorna a lista como texto
  toString() {
    return this.items.join(", ");
  }
  
  // Limpa a lista removendo todos os elementos
  clear() {
    this.items = [];
  }
}