console.log('Aplicacion Calculadora');

function sumar(){
    const forma =document.getElementById('forma');
    let operandoA=forma['operandoA'];
    let operandoB=forma['operandoB'];

    let resultado = parseInt(operandoA.value) + parseInt(operandoB.value); //le agregamos la funcion parseint para convertir los valores ingresados en numero para que pueda realizar correctamente la suma valores de tipo numerico. cuando se recuperan los valores html, se recuperan cadenas de texto, por eso convertimos a numeros
    if(isNaN(resultado))
        resultado = 'La operacion no incluye numeros';
    document.getElementById('resultado').innerHTML = `Resultado: ${resultado}`
}