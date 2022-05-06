//**************************** calse 13 ******************************
// Es 12 de 2021

//replasar una palabra espesifica en un String
const string = "Javascript es maravilloso, con Javascript puedo crear el futuro de la web";
const replacedString = string.replace("Javascript", "Python");
console.log(replacedString)

const replacedString2 = string.replaceAll("Javascript", "Python");
console.log(replacedString2)


//Metodos privados

class Message {
  #show(val){
    console.log(val)

    add('Hola '+ val);
  };

  #add(val){
    console.log(val)
  }
}

const message = new Message();

//message.show("Hola")
//message.add('Pedro')

//Promise.any retorna la primer promesa que se cumpla y no ejecuta las siginetes promesas.
const promise1 = new Promise((resolve, reject) => reject ("1"));
const promise2 = new Promise((resolve, reject) => resolve ("2"));
const promise3 = new Promise((resolve, reject) => resolve ("3"));

Promise.any([promise1, promise2, promise3])
  .then(response => console.log(response))

//Referencia Devil
//con esto garantisamos que una varible u objeto se recojido por el recolector de vasura
class anyClass{
  constructor(element){
    this.ref = new WeakRef(element)
  }

  //{...}
}


//

let isTrue = true;
let isFalse = false;
//AND
console.log(isTrue &&= isFalse);
//OR
console.log(isTrue ||= isFalse);
//Validacion de elementos nulos
console.log(isTrue ??= undefined);
