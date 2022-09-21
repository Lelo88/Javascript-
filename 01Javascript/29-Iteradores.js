/*let iterador = { // objeto que funciona como iterador 
    next(){
        return {
            value: null,
            done: true
        }
    }
}*/

let iterador = { // objeto que funciona como iterador 
    currentValue:1,
    next(){
        let resultado = {value:null, done:true};

        if(this.currentValue > 0 && this.currentValue<=5){
            resultado = {value: this.currentValue, done: false};
            this.currentValue ++;
        }else{
            resultado = {done:true};
        }

        return resultado
    }
}

let item= iterador.next()

while(!item.done){
    console.log(item.value);
    item=iterador.next()
} // mientras que done no sea true, va a iterar esta cantidad de veces

console.log(iterador.next());

//generadores

function* counter(){
    console.log("Estoy aqui");
    yield 1;
    console.log("Ahora estoy aca");
    yield 2;
}

let generator = counter(); // produce yield dy done hasta que de la vuelta con los generadores

console.log(generator.next());
console.log(generator.next());
console.log(generator.next());

function* counter2(){
    for(var i=1;i<=5;i++){
        yield i; //si en vez de colocar yield, coloco return, me devuelve true y el valor de i 
    }
}

let generator2 = counter2();

console.log(generator2.next());
console.log(generator2.next());
console.log(generator2.next());
console.log(generator2.next());
console.log(generator2.next());
console.log(generator2.next());


//iterables con iteradores
let rango = {
    min: null,
    max: null,
    currentValue: null,
    [Symbol.iterator](){
        return this;
    }, 
    next(){
        if(this.currentValue==null) this.currentValue = this.min;
        let result = {};
        if (this.currentValue>=this.min && this.currentValue<= this.max){
            result = {value: this.currentValue, done: false};
            this.currentValue += 1;
        } else {
            result = {done: true};
        }
        
        return result;
    }  
};

rango.min=5;
rango.max=10;

for(n of rango){console.log(n)}

//iterables y generadores

let rango2 = {
    min: null,
    max: null,
    [Symbol.iterator](){
        return this.generator();
    },   
    generator: function* (){
       for(var i= this.min;i<=this.max;i++){
           yield i;
       }
    }   
} 

rango2.min=12;
rango2.max=20;

for(m of rango2){console.log(m)}
