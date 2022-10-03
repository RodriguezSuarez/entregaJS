
btnJS.addEventListener(`click`, entrega1JS);
function entrega1JS(){
let nombre = prompt(`¿Cuál es tu nombre?`);
for (let i = 1; i <= 3; i++) {
    if (!isNaN(nombre)){
      nombre = prompt(`Pregunté ¿cuál es tu nombre?
      (tienes 3 intentos y llevas ${i})`);
    }
  }

alert(`Hola ${nombre}!!!
Vamos a la heladería...`);

let dinero = parseFloat(prompt(`¿Cuánto dinero tienes ${nombre}? 
A ver que podés comprar (que sea un valor entre 0 y 100)`));

while (Number.isNaN(dinero) || dinero > 100) {
  dinero = parseFloat(prompt(`${nombre} pregunte ¿cuánto dinero tienes?
(que sea un valor entre 0 y 100)`));
}

alert(`Vas a comprar con $${dinero} ${nombre}`)

if (dinero >= 15 && dinero < 30) {
  alert(`${nombre} podrás comprate un helado de agua, y te sobra $${dinero - 15}`);
}
else if (dinero >= 30 && dinero < 60) {
  alert(`${nombre} podrás comprate un "helaDito" de crema de un gusto, y te sobra $${dinero - 30}`);
}
else if (dinero >= 60 && dinero < 90) {
  alert(`${nombre} podrás comprate un "helaDaso" de crema de varios gustos, y te sobra $${dinero - 60}`);
}
else if (dinero >= 90 && dinero <= 100) {
  alert(`${nombre} podrás comprate un "helaDote" de crema de varios gustos con cobertura, y te sobra $${dinero - 90}`);
}
else {
  alert(`${nombre} eres el peor, sentate y mirá como toman helado otras/os, no te alcanza ni para el cucurucho`);
}
let gusto;
do{
  gusto = prompt(`¿Qué gusto/s prefieres? (escribe 'salir' para saltar este paso)
* frutilla
* limón
* durazno
* melón`);
  switch (gusto){
    case `frutilla`:
      alert(`${nombre} elegiste ${gusto}`);
        break;
    case `limón`:
      alert(`${nombre} elegiste ${gusto}`);
        break;
    case `durazno`:
      alert(`${nombre} elegiste ${gusto}`);
        break;
    case `melón`:
      alert(`${nombre} elegiste ${gusto}`);
        break;
    default:
    alert(`${nombre} no inventes, que te pensas que estas en "Cadore" o "Lucciano's"`);
  }
}while(gusto != `salir`);
}

