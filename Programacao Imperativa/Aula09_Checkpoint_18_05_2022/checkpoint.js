const pratos = {
  1: { nome: 'Pipoca', time: 10 },
  2: { nome: 'Macarrão', time: 8 },
  3: { nome: 'Carne', time: 15 },
  4: { nome: 'Feijão', time: 12 },
  5: { nome: 'Brigadeiro', time: 8 },
};

function fazerPrato(numeroPrato, time) {
  const prato = pratos[numeroPrato];

  if (!pratos) {
    return console.log('Prato inexistente. Prato pronto, bom apeite!!!');
  }

  let visor;
  const timeDefault = prato.time;

  if (time < timeDefault) {
    visor = 'Tempo insuficiente. Prato pronto, bom apeite!!!';
  } else if (time > timeDefault * 2 && time <= timeDefault * 3) {
    visor = 'A comida queimou. Prato pronto, bom apeite!!!';
  } else if (time > timeDefault * 3) {
    visor = 'Kabummm. Prato pronto, bom apeite!!!';
  } else {
    visor = 'Prato pronto, bom apeite!!!';
  }

 return console.log(visor);
}
console.log(fazerPrato(4,10))
