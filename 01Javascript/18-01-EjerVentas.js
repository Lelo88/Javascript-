//los metodos get y set los agregamos aunque no lo usemos, para luego darle el uso apropiado
//son metodos que vamos a utilizar cuando estemos fuera de la clase

class Producto{
    
    static contadorProductos=0;
    
    constructor(nombre,precio){
        this._idProducto=++Producto.contadorProductos;
        this._nombre=nombre;
        this._precio=precio;
    }

    get idProducto(){
        return this._idProducto;
    }

    get nombre(){
        return this._nombre
    }

    set nombre(nombre){
        this._nombre=nombre;
    }

    get precio(){
        return this._precio;
    }

    set precio(precio){
        this._precio=precio;
    }

    toString(){
        return `idProducto ${this._idProducto} \n nombre: ${this._nombre} \n ${this._precio}`//template literals
    }
}

//creacion de clase orden

class Orden{ //no tendra una relacion de herencia con la clase producto, sino de agregacion
    static contadorOrdenes=0;

    static get MAX_PRODUCTOS(){
        return 5;
    } // metodo que simula una constante

    constructor(){
        this._idOrden=++Orden.contadorOrdenes;
        this._productos=[]; //este atributo recibirá elementos que vayamos agregando
        this._contadorProductosAgregados=0;
    }

    get idOrden(){
        return this._idOrden;
    }

    agregarProducto(producto){
        if(this._productos.length<Orden.MAX_PRODUCTOS){ //productos.lenght nos permite saber la cantidad d eproductos dentro de nuestro arreglo productos
            this._productos.push(producto); //agrego el producto en el arreglo de productos
            //this._productos[this._contadorProductosAgregados++]=producto; //
        }else{
            console.log('No se pueden agregar más productos');
        }
    }

    calcularTotal(){
        let totalVenta=0;
        for(let producto of this._productos){//es una sintaxis simplifacada de for que contiene una variable que contiene cada uno de los elementos del arreglo productos
            totalVenta += producto._precio; //se recorren los precios y se realiza la suma parcial de los productos
        }
        return totalVenta; //retorno el precio total de todos los productos agregados en la orden
    }

    mostrarOrden(){
        let productosOrden='';
        for(let producto of this._productos){ // 
            productosOrden += '\n{' + producto.toString()+'}' + ' ';
        } //esta sintaxis mostrara cada producto detallado

        console.log(`Orden: ${this._idOrden} Total: ${this.calcularTotal()}, Productos: ${productosOrden}`)
    }
}

let producto1 = new Producto('Pantalon', 200);
let producto2 = new Producto('Camisa', 100);

console.log(producto1.toString());
console.log(producto2.toString());

//creacion de la clase orden 

let orden1 = new Orden()
orden1.agregarProducto(producto1);
orden1.agregarProducto(producto2);

orden1.mostrarOrden();

//realizamos una nueva orden con los productos cargados anteriormente mas un nuevo producto agregado

let producto3 = new Producto('Remera', 150);

let orden2 = new Orden()
orden2.agregarProducto(producto1);
orden2.agregarProducto(producto2);
orden2.agregarProducto(producto3);

orden2.mostrarOrden();