let array = [1,2,3, [1,2,3, [1,2,3]]];
//flat nos ayuda a aplanar o colocar todos los valores de una matriz de porfundidad n en un solo vector de una dimencion
console.log(array.flat(2))


//flatMap me permite recorrer cada elemento pasarle una funcion y luego aplanarlo
let array2 = [1,2,3,4,5];
console.log(array2.flatMap(value => [value, value *2]));

//Eliminar los espacios en blanco de un String
let hello = '    hello World   ';
console.log(hello);
console.log(hello.trimStart().trimEnd());


//convertir un array a un objeto
let entries = [['name', 'John'], ['age',32]];

console.log(Object.fromEntries(entries))


//objeto de tipo simbolo el cual nos permite aseder a una descripticion
let mySymbol = 'My Symbol';
let symbol = Symbol(mySymbol);

console.log(symbol.description);
