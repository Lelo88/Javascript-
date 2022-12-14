//creacion de arreglo de ingresos y egresos

const ingresos = [
    new Ingreso('Salario', 2100),
    new Ingreso('Venta coche', 1500),
]; //generamos el array ingresos que contendra de manera predeterminada dos objetos de la clase ingreso

const egresos = [
    new Egreso('Renta departamento', 900),
    new Egreso('Ropa', 400)
]; //generamos el array egresos que contendrá de manera predeterminada dos objetos de la clase egreso
    
let cargarApp = () =>{ //función que dara inicialización a las funciones al cargarse la página
    cargarCabecero();
    cargarIngresos();
    cargarEgresos();
}

let totalIngresos = ()=>{ //función que devolverá el total de los ingresos
    let totalIngreso=0;
    for(let ingreso of ingresos){
        totalIngreso += ingreso.valor;
    } 
    return totalIngreso;
}

let totalEgresos = () =>{//función que devolverá el total de los ingresos
    let totalEgreso=0;
    for(let egreso of egresos){
        totalEgreso += egreso.valor;
    }
    return totalEgreso;
}

let cargarCabecero = () => {
    let presupuesto = totalIngresos() - totalEgresos();
    let porcentajeEgreso = totalEgresos()/totalIngresos();
    document.getElementById('presupuesto').innerHTML = formatoMoneda(presupuesto);
    document.getElementById('porcentaje').innerHTML = formatoPorcentaje(porcentajeEgreso);
    document.getElementById('ingresos').innerHTML = formatoMoneda(totalIngresos());
    document.getElementById('egresos').innerHTML = formatoMoneda(totalEgresos());
}

function formatoMoneda(valor) {
    return valor.toLocaleString('en-US', { style: 'currency', currency: 'USD', minimumFractionDigits:2});
}

const formatoPorcentaje = (valor) =>{
    return valor.toLocaleString('en-US',{style:'percent', minimumFractionDigits:2})
}

const cargarIngresos = () =>{
    let ingresosHTML='';
    for(let ingreso of ingresos){
        ingresosHTML += crearIngresoHTML(ingreso);
    }

    document.getElementById('lista-ingresos').innerHTML=ingresosHTML;
};

const crearIngresoHTML = (ingreso) =>{
    let ingresoHTML=`
    <div class="elemento limpiarEstilos">
    <div class="elemento_descripcion">+${ingreso.descripcion}</div>
    <div class="derecha limpiarEstilos">
        <div class="elemento_valor">+${ingreso.valor}</div>
        <div class="elemento_eliminar">
            <button class="elemento_eliminar--btn">
                <ion-icon name="close-circle-outline" onclick="eliminarIngreso(${ingreso.id})"></ion-icon>
            </button>
        </div>
    </div>
</div>`;

return ingresoHTML;
}

const eliminarIngreso = (id) =>{
    let indiceEliminar=ingresos.findIndex(ingreso=>ingreso.id === id); //ingreso.id es el objeto que estamos iterando y id su valor, ya que encontrara y eliminara la opcion mas adelante
    //nos da el indice del arreglo
    ingresos.splice(indiceEliminar,1); //splice encuentra el indice del objeto y lo elimina
    cargarCabecero();
    cargarIngresos();
};

const cargarEgresos = () =>{
    let egresosHTML='';
    for(let egreso of egresos){
        egresosHTML += crearEgresoHTML(egreso);
    }

    document.getElementById('lista-egresos').innerHTML=egresosHTML;
}

const crearEgresoHTML = (egreso) =>{ //función que visualiza el objeto egreso ingresado
    let egresoHTML=`
    <div class="elemento limpiarEstilos">
    <div class="elemento_descripcion">${egreso.descripcion}</div>
    <div class="derecha limpiarEstilos">
        <div class="elemento_valor">-${formatoMoneda(egreso.valor)}</div>
        <div class="elemento_porcentaje">${formatoPorcentaje(egreso.valor/totalEgresos())}</div>
        <div class="elemento_eliminar">
            <button class="elemento_eliminar--btn">
                <ion-icon name="close-circle-outline" onclick="eliminarEgreso(${egreso.id})"></ion-icon>
            </button>
        </div>
    </div>
</div>`; 

return egresoHTML;
}

const eliminarEgreso = (id) =>{
    let indiceEliminar=egresos.findIndex(egreso=>egreso.id === id); //egreso.id es el objeto que estamos iterando y id su valor, ya que encontrara y eliminara la opcion mas adelante
    //nos da el indice del arreglo
    egresos.splice(indiceEliminar,1); //splice encuentra el indice del objeto y lo elimina
    cargarCabecero();
    cargarEgresos();   
}

let agregarDato = () =>{ //funcion que agrega se encarga de agregar la descripción y valor del objeto ingreso o egreso 
    let forma = document.forms['forma'];
    let tipo = forma['tipo'];
    let descripcion = forma['descripcion']
    let valor = forma['valor'];

    if(descripcion.value!=='' && valor.value!==''){
        if(tipo.value === 'ingreso'){ //si el tipo de valor es ingreso, se coloca en la lista de ingresos
            ingresos.push(new Ingreso(descripcion.value, +valor.value));
            cargarCabecero();
            cargarIngresos();           
        }
        else if(tipo.value==='egreso'){ // si el tipo de valor es egreso, se coloca en la lista de egresos
            egresos.push(new Egreso(descripcion.value, +valor.value));
            cargarCabecero();
            cargarEgresos();
        }
    }
}