let clicksTotales = 0;
let usuario;
let repositorios;


$(document).ready(function () {
	elementosOcultos();
    cargarDatos();
	aparecenElementos();
    cambiarColorLabelSeguidos();
    cambiarColorLabelSeguidores();
    contadorClicks();  
	reiniciar();
	pasarPorArribaImagen();
	clickearFilaTabla();
	
});

var aparecenElementos = function(){
	$("#nombre_usuario").fadeIn(1500).show();
	$("#nombre_empresa").fadeIn(1500).show();
	$("#numero_repositorios").fadeIn(1500).show();
	$("#numero_gists").fadeIn(1500).show();
	$("#numero_seguidos").fadeIn(1500).show();
	$("#numero_seguidores").fadeIn(1500).show();
}

var elementosOcultos = function(){
	$("#nombre_usuario").hide();
	$("#nombre_empresa").hide();
	$("#numero_repositorios").hide();
	$("#numero_gists").hide();
	$("#numero_seguidos").hide();
	$("#numero_seguidores").hide();
}
	  

var login = function () {
    let user = $("#id_usuario").val();
    $.ajax({
        url: "https://api.github.com/users/"+user,
        type: "get",
        dataType: "JSON",
        success: function (json) {
            usuario = json;
			elementosOcultos();
			$("#id_usuario").css("background-color", "white");
            $("#nombre_usuario").text(usuario.name);
            $("#nombre_empresa").text(usuario.company);
            $("#numero_repositorios").text(usuario.public_repos);
            $("#numero_gists").text(usuario.public_gists);
            $("#numero_seguidos").text(usuario.following);
            $("#numero_seguidores").text(usuario.followers);
			aparecenElementos();
			cargarImagen();
			efectoImagen();
			buscarRepositorios(user);
            
        },
        error: function () {
			$("#id_usuario").show(1500, function(){
				$(this).val("Ha ocurrido un error, por favor ingrese nuevamente nombre de usuario");
				$(this).css("background-color", "red")
				
			});
            
        }
    });

}

var efectoImagen = function(){
	 $("#imagenPerfil").slideDown(500).show();
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
    $("#id_usuario").keypress(function(e) {
        if(e.which == 13) {
          login();
        }
      });
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
    $("#imagenPerfil").attr("src", usuario.avatar_url).hide();
	
}

var reiniciar = function () {
    $("#boton_reiniciar").on("click", function () {
		$("#id_usuario").val("");
		$("#imagenPerfil").attr("src", "https://cdn.iconscout.com/icon/free/png-256/avatar-372-456324.png");
        $("#nombre_usuario").text('-');
        $("#nombre_empresa").text('-');
        $("#numero_repositorios").text(0);
        $("#numero_gists").text(0);
        $("#numero_seguidos").text(0);
        $("#numero_seguidores").text(0);
		vaciarTabla();
    });
}

var vaciarTabla = function () {
	var contenido = "";
    contenido += '<tr> <td id="idTabla">ID</td>'
	contenido +='<td id="repositorioTabla">Repositorio</td>' 
	contenido +='<td id="descripcionTabla">Descripcion</td></tr>'
    $("#cuerpo_table").html(contenido);
}

var pasarPorArribaImagen = function(){
	 $("#imagenPerfil").hover(function(){
		$(this).animate({
			width: "140%",
			opacity: 0.4,
		}, 500, "swing" );
		}, function(){
		$(this).animate({
			width: "70%",
			opacity: 1,
			border: "0px",
		}, 500, "swing");
	});


}

var clickearFilaTabla = function(){
	$("#cuerpo_table").click(function(){
		$("#label_seguidos").css("color", "red");
		alert("Felicitaciones, encontro un estear egg");
	});
}

