/*
scrivi una funzione che a partire dall'array `input` restituisce un oggetto composto dalle seguenti proprietà:
– "near": un array di oggetti con proprietà "distance" superiore/uguale a 0 e inferiore a 4
- "medium": un array di oggetti con proprietà "distance" superiore/uguale a 4 e inferiore a 8
- "far": un array di oggetti con proprietà "distance" superiore/uguale a 8 e inferiore/uguale a 10
nell'oggetto finale non devono essere presenti oggetti con proprietà "type" uguale a "a"
*/

const input = [
  { type: 'a', distance: 5 },
  { type: 'c', distance: 3 },
  { type: 'b', distance: 6 },
  { type: 'c', distance: 12 },
  { type: 'b', distance: 1 },
  { type: 'a', distance: 5 },
  { type: 'b', distance: 6 },
  { type: 'a', distance: -1 },
  { type: 'c', distance: 9 },
  { type: 'd', distance: 10 }
]

function near(valueN) {
  return valueN.distance >=0 && valueN.distance < 4;
}

function medium(valueM) {
  return valueM.distance >=4 && valueM.distance < 8 && valueM.distance != 5;
}

function far(valueF) {
  return valueF.distance >=8 && valueF.distance <= 10;
}

let inputFinale = [].concat.apply([], [input.filter(near), input.filter(medium), input.filter(far)]);

console.log(inputFinale);
