console.log('Clase de personas');

class Persona{
    constructor(nombre, apellido, dni){
        this._nombre=nombre;
        this._apellido=apellido;
        this._dni=dni;
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

    get dni(){
        return this._dni;
    }

    set dni(dni){
        this._dni=dni;
    }
}