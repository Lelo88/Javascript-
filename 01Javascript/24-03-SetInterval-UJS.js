//funcion que me permite tener el segundo a segundo de la hora actual

let reloj = () => {
    let fecha = new Date();
    console.log(`${fecha.getHours()}:${fecha.getMinutes()}:${fecha.getSeconds()}`);
}

setInterval(reloj, 1000);//1 seg la funcion reloj se manda a llamar cada segundo
