//*********************** Clase 8 **************
//Es 8
//async y await
const helloWorl = () =>{
  return new Promise((resolve, reject)=>{
    (true)
    ? setTimeout(() => resolve('Hello World'), 3000)
    : reject(new Error('Test Error'))
  })
};

const helloAsinc = async () =>{
  const hello = await helloWorl();
  console.log(hello);
}

//helloAsinc();


//manera recomendada
const anothorFunction = async () => {
  try {
    const hello = await helloWorl();
    console.log(hello);
  } catch (error) {
    console.log(error)
  }
}

anothorFunction();
