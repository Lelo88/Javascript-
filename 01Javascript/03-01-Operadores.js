let a = 3, b=2, c=1, d=4; 
let z = a + b; 
console.log("Resultado de la suma: " + z);

z= a-b;

console.log("Resultado de la resta: " + z);

z= a*b;
console.log("Resultado de la multiplicacion: " + z);

z=a/b;
console.log("Resultado de la division: " + z);
z=a%b;
console.log("Resultado del resto de la división: " + z);

z=a**b;
console.log("Resultado del exponente: " + z);

/*operadores de incremento y decremento*/


//preincremento

z=++a;
console.log(a);
console.log(z);

//post incremento

t=b++;
z=b++;
console.log(b);
console.log(z);
console.log(t)

//decremento postdecremento

z=--a;
console.log(a);
console.log(z);


z=b--;
console.log(b);
console.log(z);

//precedencia

z=a*b+c;
console.log(z);

z=c+a*b;
console.log(z);

z=c+a*b/d;
console.log(z);

z=a*b+c/d;
console.log(z);

z=(c+a)*b/c;
console.log(z);

//operadores de asignacion

a+=3;
console.log(a); //a=a+3

a-=3;
console.log(a); //a=a-3

//operadores de comparacion

let f=3, g=2, h="3";

let p = f==h;

console.log(p)

//operador distinto a

p = f!==c;

console.log(p)

p = f!=c
console.log(p)

//operadores relacionales

p= f>g

console.log(p)

p= f<g

console.log(p)

//operadores de igualdad estricta 

let numero10="10";
if(numero10===10){
    console.log ("este numero es un entero");
} else {
    console.log ("este numero no es un entero");
}

//operadores de desigualdad estricta 

if(numero10!==17){
    console.log("Este numero no es 17")
} else {
    console.log("Este numero es 17");
}