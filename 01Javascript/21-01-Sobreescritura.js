class Empleado{
    constructor(nombre,sueldo){
        this.nombre=nombre;
        this.sueldo=sueldo;
    }

    obtenerDetalles(){
        return `Empleado: ${this.nombre}. sueldo ${this.sueldo}`;
    } //metodo que se va a heredar 
}

class Gerente extends Empleado{
    constructor(nombre, sueldo,departamento){
        super(nombre,sueldo);
        this.departamento = departamento;
    }

    obtenerDetalles(){
        return `Gerente: ${super.obtenerDetalles()} depto: ${this.departamento}` //aca aplicamos la sobreescritura, reusando la misma funcion, pero agregando super para que herede lo del padre 
    }
}

function imprimir(tipo){ //la variable nunca la definimos, sino que se la asignamos a una referencia, por ejemplo a empleado1 o a gerente1
    console.log(tipo.obtenerDetalles()); //llamo un metodo de la clase padre. a esto se lo conoce como polimorfismo
    if (tipo instanceof Gerente){
        console.log('Es una instancia de tipo gerente');
        console.log(tipo.departamento); //tira sistemas porque existe en esta clase
    }else{
        console.log('Es una instancia de tipo empleado');
        console.log(tipo.departamento); //tira undefined porque no existe en Empleado y no puede ser heredado de Gerente
    }
}

let empleado1=new Empleado('Leandro', 5000);
let gerente1=new Gerente('Carlos',5000,'Sistemas');

console.log(gerente1.obtenerDetalles());

imprimir(empleado1);
imprimir(gerente1); 
//la palabra reservada instance of nos sirve para saber a que tipo de clase pertenece un objeto
//al tener una relacion de herencia, si pregunto si es de clase Empleado, en los dos me va a decir que si
//si pregunto si es de gerente, el objeto empleado no va a recibir un mensaje, pero el objeto de GErente si