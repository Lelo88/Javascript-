//metodo static
//los elementos estaticos, generalmente, se asocian con una clase pero no con un objeto
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

    static saludar(){
        console.log("Saludos desde elemento static");
    }

    static saludar2(persona){
        console.log(persona.nombre + ' ' + persona.apellido);
    }
}

class Empleado extends Persona{ //le damos la clase Persona2 a la clase Empleado
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

let persona1 = new Persona('Juan','Perez');
console.log(persona1);

let empleado1 = new Empleado('Maria','Lopez','Doctora')//persona1.saludar(); //aunque este definida como una funcion, no puedo usarla en un objeto
//no es posible llamar un metodo estatico desde un objeto

Persona.saludar() // lo podemos llamar desde una clase

//podemos llamarlo pasando un objeto como parametro

Persona.saludar2(persona1);

//en la clase hija se pueden utilizar los metodos estaticos
Empleado.saludar();
Empleado.saludar2(empleado1)

//ATRIBUTOS ESTATICOS EN JS

class Persona1{
    
    static contadorObjetosPersona=0; //definimos una variable estatica en la clase
    
    email='valor por default';

    constructor(nombre, apellido){
        this._nombre=nombre;
        this._apellido=apellido;
        Persona1.contadorObjetosPersona++; //si queremos utilizar el atributo static y, en este caso, incrementarlo, no podemos utilizar this ya que no se trata de un objeto. Lo llamamos a traves de la misma clase
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

    static saludar(){
        console.log("Saludos desde elemento static");
    }

    static saludar2(persona){
        console.log(persona.nombre + ' ' + persona.apellido);
    }
}

class Empleado1 extends Persona1{ //le damos la clase Persona2 a la clase Empleado
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

let persona2=new Persona1('Leandro', 'Villalba');
//console.log(persona2.contadorObjetosPersona) como es un atributo estatico, tengo que utilizarlo en la clase y no en el objeto 
let empleado3 = new Empleado1('Maria','Lopez','Doctora')

console.log(Persona1.contadorObjetosPersona);
console.log(Empleado1.contadorObjetosPersona);

//el contador se incrementa en dos, ya que tenemos un objeto creado en la clase padre y otro en la clase hijo, que hereda los atributos del padre
//por lo tanto, se suman dos objetos

//atributos no estaticos vs estaticos
//si no tienen declarado un static antes, los atributos son asociados a los objetos que se crean a traves de la plantilla la cual toman los atributos(es decir de las clases)

console.log(persona2.email); //es un atributo que puede usar el objeto

//Ejemplo de uso de la palabra static

class Persona2{
    
    static contadorObjetosPersona=0; //definimos una variable estatica en la clase
    
    //email='valor por default';

    static get MAX_OBJ(){
        return 5;
    }

    constructor(nombre, apellido){
        this._nombre=nombre;
        this._apellido=apellido;
         if(Persona2.contadorObjetosPersona <Persona2.MAX_OBJ){
            this.idPersona=++Persona2.contadorObjetosPersona; //ahora puedo usarlo en los objetos que cree
         }else{
            console.log('Se ha excedido el limite de objetos');
         }
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
        return this.idPersona +' '+ this._nombre + ' ' + this._apellido;
    }

    toString(){
        return this.nombreCompleto();
    }

    static saludar(){
        console.log("Saludos desde elemento static");
    }

    static saludar2(persona){
        console.log(persona.nombre + ' ' + persona.apellido);
    }
}

class Empleado2 extends Persona2{ //le damos la clase Persona2 a la clase Empleado
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

let persona4=new Persona2('Leandro', 'Villalba');
//console.log(persona2.contadorObjetosPersona) como es un atributo estatico, tengo que utilizarlo en la clase y no en el objeto 
let empleado4 = new Empleado2('Maria','Lopez','Doctora')

console.log(persona4.toString());
console.log(empleado4.toString());

//se incrementa en uno con cada onjeto creado

console.log(Persona2.contadorObjetosPersona);

let persona5 = new Persona2('Marcos','Gutierrez');
console.log(persona5.toString());

//constantes estaticas (lo uso en la clase anteriormente creada)

console.log(Persona2.MAX_OBJ);
Persona2.MAX_OBJ=10;
console.log(Persona2.MAX_OBJ); // al estar definido como un metodo get, no puedo cambiar su valor

let persona6=new Persona2('Lorenzo', 'Lamas');
let persona7=new Persona2('Lorenzo', 'Lamas');
let persona8=new Persona2('Lorenzo', 'Lamas');
console.log(persona6.toString());
console.log(persona7.toString());
console.log(persona8.toString()); // como se excede de la cantidad permitida, me manda un undefined
