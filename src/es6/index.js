//************************* Clase 2 **************************
//como asiamos las cosas de la manera tradicional
function newFunction(name, age, country){
  //si la variable name es nula se aplica el condicional OR ( || ) y le signa un valor por defecto
  var name = name || 'John';
  var age = age || 22;
  var country = country || 'CO'
  console.log(name, age, country);
}

// es6
function newFunction2(name = 'John', age= 22, country = 'CO'){
  console.log(name, age, country);
};

newFunction2();
newFunction2('Juan', 25, 'CO');

//templates literals
let hello = 'Hello';
let world = "World";
let epicPhrase = hello + ' '+world;
console.log(epicPhrase)
//es6
let epicPhrase2 = `${hello} ${world}`;
console.log(epicPhrase2);



//********************************** Clase 3 ***********************************
//multilinea
//normal
let lorem = "Qui consequatur. Commodi. Ipsum vel duis yet minima \n"
+ "otra frase epica que necesitamos."
//es6
let lorem2 = `Qui consequatur. Commodi. Ipsum vel duis yet minima
otra frase epica que necesitamos.
`;

console.log(lorem)
console.log(lorem2)


let person = {
  'name': 'john',
  'age': 22,
  'country': 'CO'
}
//normal
console.log(person.name, person.age);

//es6
let{ name, age, country} = person;
console.log(name, age, country);

let team1 = ['John', 'Juan', 'Esteban', 'Jonatan'];
let team2 = ['Luisa', 'Fernada', 'jeenifer', 'helisavet'];

//expandir el array de education
let education = ['David', ...team1, ...team2]
console.log(education)

//variables nuevas0
 //norval
{
  var variableGlobal = 'Hola Global var'
}
 //es6
{
  let variableLocal = 'hola global let'
  console.log(variableLocal)
}

console.log(variableGlobal)
//console.log(variableLocal)  presenta error por que no encuentra la variableLocal


//es6
//Creacion de variables constantes
const a = 'b';

//a = 'a';  no podemos modificar la varible por que es constante o unica y no permite ser cambiada

console.log(a);

// ********************************* clase 4 *************************************
// propiedad de ocjetos mejorada
let name1 = 'john';
let age1 = 22;

let obj2 = { name1, age1}

console.log(obj2)

//es6
//funciones de tipo Flecha
const names = [{name: 'John', age:22},{name: 'juan', age:25}, {name: 'esteban', age: 23}]

let listOfNames = names.map(function (obj) {
  console.log(obj.name);
});

let listOfNames2 = names.map( obj => console.log(obj.name))

const listOfName3 = (name, age) => {
  console.log("Esta es una funcion Flecha");
}

//Promesas para trabajar el asingcronismos

const helloPromise = ()=>{
  return new Promise((resolve, reject)=>{
    if(true){
      resolve('Se Resolvio con exito');
    }else{
      reject('error Ups!!')
    }
  })
}

//con then resivimos la respuesta de la promesa corecta
//y con catcj resivimos la respuesta en caso de un error
helloPromise()
  .then(response => console.log(response))
  .then(() => console.log('Hola'))
  .catch(error => console.log(error));


//******************* clase 5 ***********************
//Clases, Módulos y Generadores


class calclator {
  cosntructuor(){
    this.valueA = 0;
    this.valueB = 0;
  }

  sum(valueA, valueB){
    this.valueA = valueA;
    this.valueB = valueB;
    return this.valueA + this.valueB;
  }
}

const calc = new calclator();

console.log("Suma de 2 + 2: "+ calc.sum(2,2))

//importacion de un modulo o una funcion
//import * from './module';
//hello();


//generator
function* helloWorld(){
  if(true){
    //yield me permitira retornar algo, yiel tambien guarda el estado de forma interna
    yield 'Hello';
  }

  if(true){
    yield 'World';
  }
};

const generatorHello = helloWorld();

//para seder al valor del generator helloWorld
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);


