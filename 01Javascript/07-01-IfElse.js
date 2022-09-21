let condicion = true;

if (condicion){
    console.log("Condicion verdadera"); 
}else{
    console.log("Condicion falsa");
}

if (2>3){
    console.log("Condicion verdadera"); 
}else{
    console.log("Condicion falsa");
}

//Ejemplo

let numero = 3;

if(numero==1){
    console.log("Numero 1");
}else if(numero==1){
    console.log("Numero 2");
}else if(numero==3){
    console.log("Numero 3");
}else {
    console.log("Numero desconocido");
}

//Ejercicio calculo de estacion

let mes = 4;
let estacion;

if(mes==1 || mes==2 || mes==12){
    estacion="invierno";
}else if(mes==3 || mes==4 ||mes==5){
    estacion="primavera";
}else if(mes==6 || mes==7 || mes==8){
    estacion="verano";
}else if(mes==9 || mes==10 || mes==11){
    estacion="otoño";
}else{
    estacion="Valor incorrecto";
}

console.log(estacion);

//Ejemplo calculo de hora