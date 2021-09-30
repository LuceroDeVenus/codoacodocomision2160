let elemento = document.getElementById("principal")
//console.log(elemento);
//estructura del objeto:
//let nombredelobjeto ={ los propiedades y valores que quiero recibir ej: email: mail@mail.com, /abajo/ pass: "12345"}
let usuario ={
    name: "Lucero Sileo",
    edad: 22,
    email: "luce.sileo@gmail.com",
    pass: "123456",
    validar:(e,p)=>{
        if(e===usuario.email && p===usuario.pass){
                return true
        }else{
            return false
        }
    }
};
window.addEventListener('load',function(){
    elemento.innerHTML=` 
    <form class="col-4">
    <div class="mb-3">
      <label for="email" class="form-label">Email address</label>
      <input type="email" class="form-control" id="email" aria-describedby="emailHelp">
      <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
    </div>
    <div class="mb-3">
      <label for="password" class="form-label">Password</label>
      <input type="password" class="form-control" id="password">
    </div>
    <div class="mb-3 form-check">
      <input type="checkbox" class="form-check-input" id="exampleCheck1">
      <label class="form-check-label" for="exampleCheck1">Check me out</label>
    </div>
    <button id="btn" type="button" class="btn btn-primary">Ingresar</button>
  </form>
      `;  
document.getElementById("btn").addEventListener('click',()=>{
    let email = document.getElementById("email").value
    let pass = document.getElementById("password").value
    let entra = usuario.validar(email,pass);
    if(entra){
        elemento.innerHTML=`
        <h1>Sistema Administrativo </h1>
        <p> Bienvenidx ${usuario.name}</p>
        `;
       //elemento.innerHTML=
        //"<h1>Sistema Administrativo </h1><p> Bienvenidx "+ usuario.name+" </p>"
    }else{
        elemento.innerHTML +=`
        <div id="alerta" class="alert alert-danger text center col-12" role="alert">
  Usuario o contraseña inválidos.
</div>`;    
    }location.reload();
})
}) //le agregamos a toda la página un tipo de evento (Click, hover, doble click, keypress, onload)
//  cuando agregamos un evento tenemos que poner el tipo de evento y después la función
let tiempo = setInterval(()=>{
    document.getElementById("alerta").style.visibility="hidden";
    clearInterval(tiempo);
},3000);