//****************** Calse9 ********************
//Es9

const obj = {
  name: 'John',
  age: 22,
  country: 'CO'
}

//utilisamos el operador de reposo para separar los elementos
let { name, ...all} = obj;
console.log(name, all);

//utilidades de propagacion
const obj1 = {
  name: 'John',
  age: 22
}

const obj2 = {
  ...obj1,
  country: 'CO'
}

console.log(obj2);


//nos permite saver cundo se a termindo un yamado y poder ejecutar una funcion decidada
const helloWorld = () =>{
  return new Promise((resolve, reject) =>{
    (true)
    ? setTimeout( ()=> resolve('Hello World'), 3000)
    : reject(new Error('Test Error'))
  });
};

helloWorld()
  .then(response => console.log(response))
  .catch(error => console.log(error))
  .finally(()=> console.log('finally nos permite ejecutar una funcion cuando todo alla finalizado'));


  const regexData = /([0-9]{4})-([0-9]{2})-([0-9]{2})/;

  const match = regexData.exec('2018-04-20');
  const year = match[1]
  const month = match[2]
  const day = match[3]

  console.log(year, month, day);

