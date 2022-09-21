class Egreso extends Dato{  //clase hija de dato que contendra los objetos pertenecientes al egreso
    
    static contadorEgresos=0;
    
    constructor(descripcion,valor){
        super(descripcion,valor);
        this._id=++Egreso.contadorEgresos; //por cada egreso, estaremos contandolo
    }
    
    get id(){
        return this._id;
    }
}