//una clase es una plantilla que posee metodos y propiedades. como el objeto, posee un nombre, pero este es una instancia de una clase

//clase->objetos->variable

class Persona{
    constructor(nombre, apellido){
        this._nombre=nombre;
        this._apellido=apellido;
    }

    get nombre(){
        return this._nombre;
    }

    set nombre(nombre){
        this._nombre=nombre;
    }
}

let persona1=new Persona('Juan','Perez'); //se reserva un espacio de memoria para darle info a la clase, es decir, persona1 es un objeto de la plantilla persona
//asi llamo al constructor Persona pasandole los argumentos de juan perez, el nombre y el apellido
//let persona2=new Persona('Carlos','Gomez');
persona1.nombre= 'Juan Carlos';
console.log(persona1.nombre);
//console.log(persona2);

//METODOS GET Y SET
//de manera similar con los objetos, pasa lo mismo con clases para modificar los valores de los atributos

//HOISTING
//no podemos crear un objeto antes de crear una clase

//HERENCIA EN JAVASCRIPT 
//creamos una clase hija que va a heredar los atributos de la clase padre

class Persona2{
    constructor(nombre, apellido){
        this._nombre=nombre;
        this._apellido=apellido;
    }

    get nombre(){ //le doy el nombre
        return this._nombre;
    }

    set nombre(nombre){ // setea el nombre ingresado
        this._nombre=nombre;
    }

    get apellido(){
        return this._apellido;
    }

    set apellido(apellido){
        this._apellido=apellido;
    }
}

class Empleado extends Persona2{ //le damos la clase Persona2 a la clase Empleado
    constructor(nombre,apellido,departamento){
        super(nombre, apellido); //llamamos al constructor de la clase padre
        this._departamento=departamento;
    }

    get departamento(){
        return this._departamento;
    }

    set departamento(departamento){
        this._departamento;
    }
}

let persona02=new Persona2('Juan', 'Perez');
let empleado02=new Empleado('Maria','Jimenez','Sistemas');

console.log(persona02);
console.log(empleado02);

//definir un metodo en la clase padre para asignarlo a la clase hija

class Persona3{
    constructor(nombre, apellido){
        this._nombre=nombre;
        this._apellido=apellido;
    }

    get nombre(){
        return this._nombre;
    }

    set nombre(nombre){
        this._nombre=nombre;
    }

    get apellido(){
        return this._apellido;
    }

    set apellido(apellido){
        this._apellido=apellido;
    }
    nombreCompleto(){ //en clases, al crear un metodo, no es necesario agregarle la palabra function
        return this._nombre + ' ' + this._apellido;
    }

    toString(){
        return this.nombreCompleto();
    }
}

class Empleado2 extends Persona3{ //le damos la clase Persona2 a la clase Empleado
    constructor(nombre,apellido,departamento){
        super(nombre, apellido); //llamamos al constructor de la clase padre
        this._departamento=departamento;
    }

    get departamento(){
        return this._departamento;
    }

    set departamento(departamento){
        this._departamento=departamento;
    }
    //sobreescritura
    nombreCompleto(){
        return super.nombreCompleto() + ','+ this._departamento
    }
}

let persona2 = new Persona3('Roberto', 'Gomez');
console.log(persona2);

let empleado2=new Empleado2('Jorge','Britez', 'sistemas');
console.log(empleado2);
console.log(empleado2.nombreCompleto()); //accedemos al metodo de la clase padre

console.log(empleado2.toString());
console.log(persona2.toString());
//concepto de sobreescritura
//el metodo nombreCompleto pertenece a la clase padre, por lo cual no puedo agregarle de manera simple un atributo de la clase hija, por lo que en la clase hija aplicaremos el concepto de sobre escritura

//CLASE OBJECT, METODO TOSTRING, SOBREESCRITURA Y POLIMORFISMO

//con el metodo to string podemos simplificar los llamados de la clase hija y padre. se aplica el metodo del polimorfismo
//tanto en una clase como en la otra se imprimiran los valores de los objetos con los cuales estamos trabajando

//con toString estamos asobreescbiendo la clase padre y aplicamos polimorfismo, realizando una sola llamada
//el polimorfismo son formaas multiples en tiempo de ejecucion 
//el metodo que se ejecuta depende de que si es la clase padre o la clase hijo
//el metodo toString llama al metodo nombre completo dependiendo a la clase que este llamando

//Cambia solo el código debajo de esta línea
class Vegetable{
    constructor(vegetable){
      this.name=vegetable;
    }
  }
  // Cambia solo el código encima de esta línea
  
  const carrot = new Vegetable('carrot');
  console.log(carrot.name); // Debería mostrar 'carrot'