//**************** Calse 11  ***************
//EcmasCript 11

const button = document.getElementById("btn");

button.addEventListener("click", async function(){
  const module = await import("./file.js");
  module.hello();
});



