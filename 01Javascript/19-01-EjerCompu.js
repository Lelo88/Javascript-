//Ejercicio de ventas de computadora

class dispositivoEntrada{//clase padre de dispositivoEntrada
    constructor(tipoEntrada, marca){
        this._tipoEntrada=tipoEntrada;
        this._marca=marca;
    }

    get tipoEntrada(){
        return this._tipoEntrada;
    }

    set tipoEntrada(tipoEntrada){
        this._tipoEntrada=tipoEntrada;
    }

    get marca(){
        return this._marca;
    }

    set marca(marca){
        this._marca=marca;
    }
}

//clases hijas de dispositivosEntrada

class raton extends dispositivoEntrada{
    static contadorRatones = 0;

    constructor(tipoEntrada, marca){
        super(tipoEntrada,marca);
        this._idRaton=++raton.contadorRatones;
    }

    toString(){
        return `idRaton: ${this._idRaton} Tipo de Entrada: ${this._tipoEntrada} Marca: ${this._marca}`
    }
}

class teclado extends dispositivoEntrada{
    static contadorTeclados=0;

    constructor(tipoEntrada, marca){
        super(tipoEntrada,marca);
        this._idTeclado=++teclado.contadorTeclados;
    }

    toString(){
        return `idTeclado: ${this._idTeclado} Tipo de Entrada: ${this._tipoEntrada} Marca: ${this._marca}`
    }
}

class Monitor{
    static contadorMonitores=0
    
    constructor(marca, tamanio){
        this._idMonitor=++Monitor.contadorMonitores;
        this._marca=marca;
        this._tamanio=tamanio;
    }

    get marca(){
        return this._marca;
    }

    set marca(marca){
        this._marca=marca;
    }

    get tamanio(){
        return this._tamanio;
    }

    set tamanio(tamanio){
        this._tamanio=tamanio;
    }

    toString(){
        return `idMonitor: ${this._idMonitor} Marca: ${this._marca} Tamaño: ${this._tamanio}`
    }    
}

class Computadora{
    static contadorComputadoras=0;
    
    constructor(nombre, monitor, raton, teclado){
        this._idComputadora=++Computadora.contadorComputadoras;
        this._nombre=nombre;
        this._monitor=monitor;
        this._raton=raton;
        this._teclado=teclado;
    }//no es relacion de herencia, sino de agregacion
    
    toString(){
        return `Computadora ${this._idComputadora}: ${this._nombre}, \n
                            ${this._monitor}, \n
                            ${this._teclado}, \n
                            ${this._raton}`
    }
}

class Orden{
    static contadorOrdenes=0;

    constructor(){
        this._idOrden=++Orden.contadorOrdenes;
        this._computadoras=[];
    }

    agregarComputadora(computadora){
        this._computadoras.push(computadora);
    }

    mostrarOrden(){
        let computadorasOrden = '';
        for (let computadora of this._computadoras){
            computadorasOrden+=`\n ${computadora} `;
        }

        console.log(`Orden: ${this._idOrden} Computadoras: ${computadorasOrden}`);
    }
}


//creamos objetos tipo raton
let raton1=new raton('USB','HP');
let raton2=new raton('Bluetooth', 'Samsung');

console.log(raton1.toString());
console.log(raton2.toString());

//creamos objetos tipo teclado
let teclado1=new teclado('Bluetooth','Dell');
let teclado2=new teclado('USB', 'Epson');

console.log(teclado1.toString());
console.log(teclado2.toString());

//creamos un objeto tipo monitor
let monitor1=new Monitor('HP', 15);
console.log(monitor1.toString())


//creamos objetos tipo computadora, utilizando los objetos creados anteriormente
let computadora1= new Computadora('HP',monitor1, raton1, teclado1);
console.log(computadora1.toString());

let computadora2=new Computadora('Dell', monitor1, raton1, teclado1);
console.log(computadora2.toString());

//creamos ordenes utilizando los objetos computadora que a su vez contienen a los objetos teclado, raton y monitor
let orden1 =new Orden();
orden1.agregarComputadora(computadora1);
orden1.agregarComputadora(computadora2);

orden1.mostrarOrden();