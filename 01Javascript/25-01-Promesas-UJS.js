let miPromesa = new Promise((resolver, rechazar) => {
    let expresion = true;
    if(expresion) //si ase cumple algo, se realiza una funcion, sino se realiza la otra
        resolver('Resolvió correcto');
    else
        rechazar('Se produjo un error');    
});

//miPromesa.then( valor => console.log(valor), error => console.log(error));
miPromesa.then(valor => console.log(valor)).catch(error=>console.log(error)); //con then se resuelve la funcion que pasamos como primer parametro, con catch el segundo
