class Dato{ //la clase dato contendra los valores de descripcion y valor
    constructor(descripcion, valor){
        this._descripcion=descripcion;
        this._valor=valor;
    }

    get descripcion(){
        return this._descripcion;
    }

    set descripcion(descripcion){
        this._descripcion = descripcion;
    }

    get valor(){
        return this._valor;
    }

    set valor(valor){
        this._valor=valor;
    }
}