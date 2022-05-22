//armazenamento das constantes e tempos default

const pratos = {
  1: { nome: 'Pipoca', time: 10 },
  2: { nome: 'Macarrão', time: 8 },
  3: { nome: 'Carne', time: 15 },
  4: { nome: 'Feijão', time: 12 },
  5: { nome: 'Brigadeiro', time: 8 },
};

//função fazer pratos
function fazerPrato(numeroPrato, time) {

  //armazena valor precionado no micro-ondas
  const prato = pratos[numeroPrato];

  //validação de valor inexistente
  if (!pratos) {
    return console.log('Prato inexistente. Prato pronto, bom apeite!!!');
  }

  //visor do micro-ondas
  let visor;

  //armazenamento do tempos
  const timeDefault = prato.time;

  //logica do micro-ondas
  if (time < timeDefault) {
    visor = 'Tempo insuficiente. Prato pronto, bom apeite!!!';
  } else if (time > timeDefault * 2 && time <= timeDefault * 3) {
    visor = 'A comida queimou. Prato pronto, bom apeite!!!';
  } else if (time > timeDefault * 3) {
    visor = 'Kabummm.  Prato pronto, bom apeite!!!';
  } else {
    visor = 'Prato pronto, bom apeite!!!';
  }

//armazena resultado do micro-ondas
 return console.log(visor);
}

//intereção com usuário (Prato + tempo)
console.log(fazerPrato(4,20))

