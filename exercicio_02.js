class MeuError extends Error{
  constructor(message){
    super(message)
    this.name = "Meu Erro"
  }
}

class Estudante {
  constructor(nome, idade, turma) {
    this.nome = nome;
    this.idade = idade;
    this.turma = turma;
  }

  mostrarAtributos() {
    return this.atributos();
    
 }catch(erro){
  console.log(erro)
 }

  atributos() {
    if (this.nome != "" && this.idade != "" && this.especie != "")
      return {
        nome: this.nome,
        idade: this.idade,
        turma: this.turma
      }; else {
      throw new Error("Erro dectado, preencha todas as informações sobre o estudante")
    }
  }
}

const estudante = new Estudante("", 16, "3A");

const atributos = estudante.mostrarAtributos();

console.log(atributos.nome);
console.log(atributos.idade);
console.log(atributos.turma);

