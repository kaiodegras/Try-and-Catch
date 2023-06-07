/*
  Todos os atributos necessários. Assim, usando Try e Catch, trate os erros e apresente uma mensagem quando houve atributos vazios.
*/

class Estudante {
  constructor(nome, idade, turma) {
    this.nome = nome;
    this.idade = idade;
    this.turma = turma;
  }

  mostrarAtributos() {
    return this.atributos();
  }

  atributos() {
    if (this.nome != "" && this.idade != "" && this.especie != "")
      return {
        nome: this.nome,
        idade: this.idade,
        turma: this.turma
      }; else {
      throw new Error("Preencha todas as informações sobre o seu animal")
    }
  }
}

const estudante = new Estudante("João", 16, "3A");

const atributos = estudante.mostrarAtributos();

console.log(atributos.nome);
console.log(atributos.idade);
console.log(atributos.turma);

