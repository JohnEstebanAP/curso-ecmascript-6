//************** Calse 12 ****************
//Es 11
//numero grandes bigInt
const anotherBigNumber = 2**54;
console.log(anotherBigNumber);


//
const promise1 = new Promise((resolve, reject) => reject("reject"));
const promise2 = new Promise((resolve, reject) => resolve("resolve"));
const promise3 = new Promise((resolve, reject) => resolve("resolve 1"));

Promise.allSettled([promise1,promise2, promise3])
  .then(respnose => console.log(respnose))

//global this
// nos proporsiona una forma estandar de aseder a nuestras varibles globales
// console.log(window);
console.log(globalThis);


//nos ayuda a trabajar con los operadores nulos, poniendo un valor por defecto
const fooo = null ?? 'default string'
console.log(fooo)

const faaa = 'john' ?? 'default string'
console.log(faaa)

const user = {};
//el signo de pregunta le indica que deve leer o buscar esos balores en el ojeto asta el nivel que los pueda encontrar
//para que ase no rompa al aplicacion encaso de que un valor de esos no esista.
console.log(user?.profile?.email);


//podemos aser validaciones para saver si esiste un campo con valor en un objeto
if(user?.profile?.email){
  console.log('email')
}else{
  console.log('fail')
}
