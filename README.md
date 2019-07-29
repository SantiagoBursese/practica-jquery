# Ejercicio jQuery

API de jQuery para consultas https://api.jquery.com/

## Primera parte
1. Al tocar el botón "Cargar":
    - Nombre de usuario en el titulo
    - Nombre completo
    - Empresa
    - Cantidad de Repositorios
    - Cantidad de Gists
    - Cantidad de Seguidos
    - Cantidad de Seguidores
2. El nombre de usuario ahora se debe autocompletar al cargar la página.
3. Cada vez que se haga click en los valores de "Seguidos" o "Seguidores", cambiar de color a los labels de los mismos.
4. Al hacer click en los valores cargados debe incrementarse el contador de "Click en datos"
5. Completar tabla inferior con los datos pedidos de los repositorios que se tengan del usuario.
6. Cargar imagen en del usuario
7. El botón reiniciar deberá dejar todos los valores como en el inicio.
8. Al hacer mouseover sobre la imagen, la misma deberá poner su opacidad al 40% (opacity: 0.4)
9. Al hacer click en una fila de la tabla debera mostrarse un alert con un mensaje.
10. Al hacer click en alguna fila de la tabla también debera simular un click en el valor de "Seguidos".

## Segunda Parte - Efectos
1. Agregar efecto de SlideDown a la imagen cuando cargue.
2. Los valores de los datos deben estar ocultos y debe hacerse un FadeIn cuando se carguen.
3. Crear animación propia para la imagen cuando la misma se hace un mouseover. La animación deberá tocar al menos 3 propiedades de CSS.

## Tercera Parte - AJAX
1. En lugar de utilizar los el archivo de datos.js se deberá obtener directamente de las URL de Github.
2. Colocar un input donde al ingresar un nombre de usuario y tocar el botón "Cargar datos", obtenga los datos de ese usuario y los cargue dinámicamente en la pantalla.
3. Quitar el botón "Cargar datos" y hacer la acción al tocar la tecla ENTER en el input
4. Cargar tabla de repositorios únicamente cuando los datos de usuario ya hayan sido cargados.