alert('Soy una ventana emergente!');
console.log('Hola soy un mensaje en la consola!');
/*Variables*/
var nombre_variable;
let otra_variable = "Hola";
const PI = 3.1416;
let num2=18;
let hayClases=true;
let terminoLaClase=false;
/*Tipos,undefined, numero, String Boolean,Objeto, arreglo, chart, función*/
console.log(PI*num2);
console.log(num2 + 36 + " " +otra_variable)
/*Condicionales*/
hayClases=false;
if(hayClases == true && terminoLaClase != true){
    console.log('Nos conectamos a la veideollamada!')
}else{
    console.log('Salimos a celebrar el día del Estudiante!')
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
    elemento.style.backgroundColor="blue"
    elemento.style.color="black"
}
/*
let mensaje = prompt("Introduce tu mensaje: ");
elemento.innerHTML+="<h3>" + mensaje + "</h3>";
elemento.innerHTML+="<div class=\"alert alert-success\" role=\"alert\">"+mensaje+"</div>";
*/

let menu = prompt("Selecciona el pedido: \n 1. Milanesa con Fritas \n 2. Milanesa Napolitana\n 3. Fritas solas");
menu="2";
if(menu === '1'){/*Valor y el tipo */
    elemento.innerHTML="<div class=\"alert alert-success\" role=\"alert\">Disfruta de tu Milanesa con fritas!</div>"
}else if(menu === '2'){/*Valor y el tipo */
    elemento.innerHTML="<div class=\"alert alert-success\" role=\"alert\">Disfruta de tu Napo con fritas!</div>"
}else if(menu === '3'){/*Valor y el tipo */
    elemento.innerHTML="<div class=\"alert alert-success\" role=\"alert\">Disfruta de tus fritas!</div>"
}else{
    alert('Debes elegir una opción valida');
    let menu = prompt("Selecciona el pedido: \n 1. Milanesa con Fritas \n 2. Milanesa Napolitana\n 3. Fritas solas");
}
/*
switch (menu) {
    case '1':
        elemento.innerHTML="<div class=\"alert alert-success\" role=\"alert\">Disfruta de tu Milanesa con fritas!</div>"
        break;
    default:
        elemento.innerHTML="<div class=\"alert alert-success\" role=\"alert\">Debes elegir una opción valida</div>"
        break;
}
*/
/*
let num =0, num3=0;
num = Number(prompt("Ingresá el primer número"));
num3 = Number(prompt("Ingresá el segundo número"));
let resultado ="El resultado de la suma de "+num+" y "+num3+" es: "+ (num +num3);
*/
/*let palabra reservada nombreArreglo =[index0, index1, nindex]*/

let alumnos=["Natalia", "Nicolas","Ramiro","Soledad"];
/*aí se hacía antes*/
for(let a=0; a < alumnos.length; a++){
    elemento.innerHTML+=`
        <div class="card" style="width: 18rem;">
            <img src="..." class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${alumnos[a]}</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
        </div>
`;
}
alumnos.push("Barbara");
alumnos[5]="Luis"
/*así se hace ahora*/
alumnos.forEach((nombres,index)=>{
    elemento.innerHTML+=`
    <div class="card" style="width: 18rem;">
        <img src="..." class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title"> ${index + 1} ${nombres}</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
    </div>
`;
});
/*puedo poner index en la variable del nombre del array para que ponga el número que es del index*/