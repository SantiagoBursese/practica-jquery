let clicksTotales = 0;

$(document).ready(function () {
    $("#id_usuario").text(usuario.login);
    cargarDatos();
    cambiarColorLabelSeguidos();
    cambiarColorLabelSeguidores();
    contadorClicks();
   
    
});

var cargarDatos = function () {
    $("#boton_cargar").on("click", function () {
        $("#nombre_usuario").text(usuario.name);
        $("#nombre_empresa").text(usuario.company);
        $("#numero_repositorios").text(usuario.public_repos);
        $("#numero_gists").text(usuario.public_gists);
        $("#numero_seguidos").text(usuario.following);
        $("#numero_seguidores").text(usuario.followers);
        completarTabla();
        cargarImagen();
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
