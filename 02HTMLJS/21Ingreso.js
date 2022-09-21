class Ingreso extends Dato{ //clase hija de datos que contendra los objetos del infreso
    
    static contadorIngresos=0;
    
    constructor(descripcion,valor){
        super(descripcion,valor);
        this._id=++Ingreso.contadorIngresos;
    }
    
    get id(){
        return this._id;
    }
}