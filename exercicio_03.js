class MeuError extends Error{
  constructor(message){
    super(message)
    this.name = "Meu Erro"
  }
}

class NerdIF {
  constructor(estudante, cosplay, nota_cosplay) {
    this.estudante = estudante;
    this.cosplay = cosplay;
    this.nota_cosplay = nota_cosplay;
  }

  retornarAtributos() {
    return this.atributos()
  }


  atributos() {
    return {
      estudante: this.estudante,
      cosplay: this.cosplay,
      nota_cosplay: this.nota_cosplay
    }; else {
      throw new Error("Erro dectado, preencha todas as informações sobre o cosplay")
    }
  }
}

const aluno = new NerdIF("Kaio", "Peak Blinders", 9.5);
const atributos = aluno.retornarAtributos();

console.log(atributos.estudante);
console.log(atributos.cosplay);
console.log(atributos.nota_cosplay);

