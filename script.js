let menuVisible = false;

//Función que oculta o muestra el menu
function mostrarOcultarMenu(){  
    if(menuVisible){
        document.getElementById("nav").classList = "";
        menuVisible = false;
    }else{
        document.getElementById("nav").classList = "responsive";
        menuVisible = true;
    }
}

function seleccionar(){
    //Oculto el menu una vez que selecciono una opcion
    document.getElementById("nav").classList = "";
    menuVisible = false;
}

//Funcion que aplica las animaciones de las habilidades

function efectoHabilidades(){
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if(distancia_skills >= 300){
        let habilidades = document.getElementsByClassName("progreso");
        habilidades[0].classList.add("javascript");
        habilidades[1].classList.add("html");
        habilidades[2].classList.add("css");
        habilidades[3].classList.add("reactjs");
        habilidades[4].classList.add("mysql");
        habilidades[5].classList.add("comunicacion");
        habilidades[6].classList.add("trabajo");
        habilidades[7].classList.add("creatividad");
        habilidades[8].classList.add("dedicacion");
        
    }
}

//detecto el scrolling para aplicar la animación de la barra de habilidades.

window.onscroll = function(){
    efectoHabilidades();
}

// funcionalidad del formulario

const $form = document.querySelector("#form");

$form.addEventListener("submit", handleSubmit);

async function handleSubmit(event){
 event.preventDefault();
 const form = new FormData(this);
 const response = await fetch(this.action,{
    method: this.method,
    body: form,
    headers:{
        "Accept": "application/json"
    }
 })
 if(response.ok){
    this.reset()
    alert("Gracias por contactarme!");
  }
}

