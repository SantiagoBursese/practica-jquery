let clicksTotales = 0;
let usuario;
let repositorios;


$(document).ready(function () {
    cargarDatos();
    cambiarColorLabelSeguidos();
    cambiarColorLabelSeguidores();
    contadorClicks();  
});

var login = function () {
    let user = $("#id_usuario").val();
    $.ajax({
        url: "https://api.github.com/users/"+user,
        type: "get",
        dataType: "JSON",
        success: function (json) {
            usuario = json;
            buscarRepositorios(user);
            $("#nombre_usuario").text(usuario.name);
            $("#nombre_empresa").text(usuario.company);
            $("#numero_repositorios").text(usuario.public_repos);
            $("#numero_gists").text(usuario.public_gists);
            $("#numero_seguidos").text(usuario.following);
            $("#numero_seguidores").text(usuario.followers);
            cargarImagen();
        },
        error: function () {
            alert("Usuario no encontrado");
        }
    });

}

var buscarRepositorios = function (user) {
    $.ajax({
        url: "https://api.github.com/users/"+user+"/repos",
        type: "get",
        dataType: "JSON",
        success: function (json) {
            repositorios = json;
            completarTabla();
        },
        error: function () {
            alert("No se encontró el repositorio.");
        }
    });
}


var cargarDatos = function () {
    
    $("#boton_cargar").on("click", function () {   
        login();
     
    });
}

var cambiarColorLabelSeguidos = function () {
    $("#numero_seguidos").on("click", function () {
        $("#label_seguidos").css("color", "red");
    });

}

var cambiarColorLabelSeguidores = function () {
    $("#numero_seguidores").on("click", function () {
        $("#label_seguidores").css("color", "red");
    });

}

var contadorClicks = function () {
    $(".otros-datos, .datos, .titulo, .tabla").on("click", function () {
        clicksTotales++;
        $("#clicks_en_dato").text(clicksTotales);
    });
}

var completarTabla = function () {
    var contenido = "";
    for (i = 0; i < repositorios.length; i++) {
        contenido += '<tr><td id="idTabla">' + repositorios[i].id +
            '</td > <td id="repositorioTabla">' + repositorios[i].name +
            '</td> <td id="descripcionTabla">' + repositorios[i].description + '</td></tr>';
        $("#cuerpo_table").html(contenido);
    }
   
}

var cargarImagen = function () {
    $("#imagenPerfil").attr("src", usuario.avatar_url);
    $("#imagenPerfil").css("opacity", 1);
}

var reiniciar = function () {
    $("#boton_reiniciar").on("click", function () {
        $("#nombre_usuario").text('-');
        $("#nombre_empresa").text('-');
        $("#numero_repositorios").text(0);
        $("#numero_gists").text(0);
        $("#numero_seguidos").text(0);
        $("#numero_seguidores").text(0);
    });
}
