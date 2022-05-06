//***************** Clase 7 ***************
//actulizacion de ecmascript 8

const data = {
  frontend: 'John',
  backend: 'Isabel',
  design: 'Nathalya'
}

const entries = Object.entries(data);

console.log(data)
//nos imprime el objeto como una matriz
console.log(entries)
//para saver cuntos elementos tinene nuestro Objecto
console.log(entries.length)

//para convertir un objeto array
const values = Object.values(data);
console.log(values);
console.log(values.length);


//padding
const string = 'hello';
console.log(string.padStart(7,'hi'));
console.log(string.padEnd(11,' -----'));
console.log('food'.padEnd(12, '  -----'));

//treilin comas
const obj = {
  name: 'oscar',//nos indica en el siginete puede haber un valor o no
}
