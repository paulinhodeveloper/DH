let frutasAmarelas=['Melão', 'Mamão', 'Limão siciliano'];
let frutasVermelhas=['Morango', 'Cereja', 'Maça red'];
let frutasVerdes=['Limão', 'Kiwi', 'Maça Verde'];

frutasVermelhas1 = frutasVermelhas.map(fruta => fruta.toUpperCase());
let todasFrutas=[...frutasAmarelas,...frutasVermelhas1,...frutasVerdes];
console.log(todasFrutas);