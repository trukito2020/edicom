/*---- SCRIPT DESPLAZAMIENTO SUAVE CON JQUERY, UTILIZANDO SU METODO ANIMATE --*/

// añade eventos a los elementos del DOM seleccionados(evento click en este caso), funcion se ejecuta cuando se produzca el evento(click)
$('.navbar-brand, .nav-link, footer div > a').on('click', function(e){

    e.preventDefault(); //cancela comportamiento del evento

    const href = $(this).attr('href'); //extrae el valor del atributo href

    //animacion de la propiedad scrollTop ajustando la velocidad con el metodo animate

    $('html,body').animate({scrollTop: $(href).offset().top }, 700);

});


/*--- SCRIPT PARA OCULTAR LA BARRA DE NAVEGACIÓN EN DISPOSITIVOS MÓVILES, AL CLICKAR SOBRE UN ENLACE DE LA NAVBAR O SOBRE EL BODY,MODIFICANDO EVENTOS DE LA CLASE COLLAPSE DE BOOTSTRAP ---*/


$('body, .nav-link').on('click', function(){ //al hacer clik en un nav-link o en el body, se oculta el elemento plegable con "hide"
    $('.collapse').collapse('hide');
});
