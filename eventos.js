
document.getElementById("1").addEventListener(`click`,cambiarPerfil)

document.getElementById("2").addEventListener(`click`,cambiarEducacion)

document.getElementById("3").addEventListener(`click`,cambiarExperiencia)

document.getElementById("4").addEventListener(`click`,cambiarDatos)

function cambiarPerfil() {
    cambiarTexto("perfil","educacion","mas_sobre_mi","experiencia")
}
function cambiarEducacion() {
    cambiarTexto("educacion","experiencia","mas_sobre_mi","perfil")
}
function cambiarExperiencia(){
    cambiarTexto("experiencia","educacion","mas_sobre_mi","perfil")
}


function cambiarDatos() {
    cambiarTexto("mas_sobre_mi","educacion","perfil","experiencia")
}

function cambiarTexto(titulo1,titulo2,titulo3,titulo4) {
    var titulo1 = document.getElementById(titulo1)
    var titulo2 = document.getElementById(titulo2)
    var titulo3 = document.getElementById(titulo3)
    var titulo4 = document.getElementById(titulo4)
    if (titulo1.style.display="none") {
        titulo1.style.display="block"
    }
    if (titulo2.style.display="block") {
        titulo2.style.display="none"
    }
    if (titulo3.style.display="block") {
        titulo3.style.display="none"
    }
    if (titulo4.style.display="block") {
        titulo4.style.display="none"
    }
    
}
