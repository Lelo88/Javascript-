console.log('Listado de Personas');

const personas=[
    /*new Persona('Juan', 'Perez'),
    new Persona('Carla', 'Lara'),
    new Persona('Maria','Juarez')*/
];

function mostrarPersonas(){
    console.log('Mostrar Personas...');
    //recuperamos los tipos personas que tengamos en  arreglo
    let texto='';
    for(let persona of personas){
        console.log(persona);
        texto +=`<li> Nombre: ${persona.nombre} \t Apellido: ${persona.apellido} \t DNI: ${persona.dni}`; //se crea una cadena de tipo persona 
    }
    document.getElementById('personas').innerHTML=texto;
} //agregamos personas de manera dinamica manejando los objetos de listado (programacion orientada a objetos)
   
function agregarPersonas(){
    const forma=document.forms['forma'];
    const nombre = forma['nombre'];
    const apellido = forma['apellido'];
    const dni =forma['documento'];
    if(nombre.value!='' && apellido.value!='' && dni.value!=''){
        const persona = new Persona(nombre.value, apellido.value, dni.value);
        console.log(persona);
        personas.push(persona); //agrego el nombre ingresado al const personas que esta mas arriba, ya que es un objeto persona de la clase Persona
        mostrarPersonas(); //lllamo a la funcion mostrar persona para mostrar lo que agregue
    }else{
        console.log('No hay informacion que agregar');   
    }
    
}