const txtOperador1 = document.getElementById(`operador1`);
const txtOperacion = document.getElementById(`operacion`);
const txtOperador2 = document.getElementById(`operador2`);
const btnCalcular = document.getElementById(`calcular`);
const pResultado = document.getElementById(`resultado`);
// const pResultado = document.getElementByClassName(`resultado`);

btnCalcular.addEventListener(`click`, calcular);

function calcular (){
  // const operacion = parseFloat(txtOperacion.value);
  const operacion = txtOperacion.value;
  const operador1 = parseFloat(txtOperador1.value);
  const operador2 = parseFloat(txtOperador2.value);

  if(operacion == `+` || operacion == `-` || operacion == `*` || operacion == `/` && !isNaN(operador1) && !isNaN(operador2)){
    let resultado;
    switch(operacion){
      case `+`: 
        resultado = operador1 + operador2;
          break;
      case `-`: 
        resultado = operador1 - operador2;
          break;
      case `*`: 
        resultado = operador1 * operador2;
          break;
      case `/`: 
        resultado = operador1 / operador2;
          break;
    }
    pResultado.style = `color: aqua`;
    pResultado.innerText = `= ${resultado}`;
  }else{
    pResultado.style = `color: yellow`;
    pResultado.innerText = `Calculo imposible`;
  }
}