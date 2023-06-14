class MeuError extends Error {
  constructor(message){
    super(message);
    this.name = "Meu Erro";
  }
}
class Animal {
  constructor(nome, idade, especie) {
    this.nome = nome;
    this.idade = idade;
    this.especie = especie;
  }

  mostrarAtributos() {
    try {
      return this.atributos();
    } catch (erro) {
      console.log(erro.message)
    }
  }

  atributos() {
    if (this.nome != ""){
      return {
        nome: this.nome,
        idade: this.idade,
        especie: this.especie
      }; else {
        throw new Error("Erro dectado, preencha todas as informações sobre seu animal")
      }
      
  
const meuAnimal = new Animal("", "");
const atributos = meuAnimal.mostrarAtributos();

console.log(atributos)

//console.log(atributos.nome)
//console.log(atributos.idade)
//console.log(atributos.especie)