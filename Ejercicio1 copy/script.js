window.onload = inicializaEventos

function inicializaEventos(){
    let button = document.getElementById("btnSaludar");
    button.addEventListener("click", saludar, false);
}

function saludar (){
    let millamada = new XMLHttpRequest();
    let divmensaje = document.getElementById("divmensaje");

    millamada.open("GET", "https://crudjgonzalez.azurewebsites.net/api/personas")
    millamada.onreadystatechange = function(){
        if (millamada.readyState < 4){
            divmensaje.innerHTML = "Cargando..."
        } else  {
            if (millamada.readyState == 4 && millamada.status == 200){
                let response = millamada.responseText;
                divmensaje.innerHTML = response;
            }
        }
    }
    
    millamada.send()
}

let request = new XMLHttpRequest();