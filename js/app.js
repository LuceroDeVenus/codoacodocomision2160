alert('Soy una ventana emergente!');
console.log ('Hola soy un mensaje en la consola!') 
/*variales*/
var nombre_variable;
let otra_variable ="hola"
const PI=3.1416;
let num2=18;
let hayclases=true;
let terminoLaClase=false;
/*tipos undefined, numero, string boolean, objeto, arreglo, chart, funtion */
console.log(PI*num2)
console.log(num2 + 36 +"" +otra_variable)
/*Condicionales*/
if(hayClases){
    console.log ('Nos conectamos a la videollamada')
} else{
    console.log('Salimos a celebrar el día del estudiante')
}
if(hayClases == false || terminoLaClase == true){
    console.log('Salimos a celebrar el día del Estudiante!');
}

let elemento = document.getElementById("principal");
// console.log(elemento)
elemento.innerHTML="MI valor para innerHTML"
elemento.innerHTML+='<p>' + otra_variable + '</p>';
document.write("<h3 class='text-center bg-primary'>Hola buen día</h3>")
document.write("<h3>Cómo están?</h3>")

if(nombre_variable == undefined){
    elemento.innerHTML+="Estamos con una variable sin valor definido!"
    elemento.innerHTML+="<p>Luis Navas</p><p>Barbara</p><p>Damian</p><p>Debora</p><p>Elias</p>"
    elemento.style.backgroundColor="Blue"
    elemento.style.color="white"
}
