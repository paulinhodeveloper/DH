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
      return console.log('Prato inexistente');
    }
  
    let visor;
    const tempoDefault = prato.time;
  
    if (time < tempoDefault) {
      visor = 'Tempo insuficiente';
    } else if (time > tempoDefault * 2 && time <= tempoDefault * 3) {
      visor = 'A comida queimou';
    } else if (time > tempoDefault * 3) {
      visor = 'Kabummm';
    } else {
      visor = 'Prato pronto, bom apeite!!!';
    }
  
   return console.log(visor);
  }
console.log(fazerPrato(2,8))