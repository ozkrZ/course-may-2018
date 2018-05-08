function animateprogress (id, val){


	var getRequestAnimationFrame = function () {
		return window.requestAnimationFrame ||
		window.webkitRequestAnimationFrame ||
		window.mozRequestAnimationFrame ||
		window.oRequestAnimationFrame ||
		window.msRequestAnimationFrame ||
		function ( callback ){
			window.setTimeout(enroute, 60 / 3000 * 9000);
		};
	};

	var fpAnimationFrame = getRequestAnimationFrame();
	var i = 0;
	var animacion = function () {

	if (i<=val)
		{
			document.querySelector(id).setAttribute("value",i);      /* <----  Incremento el valor de la barra de progreso */
			document.querySelector(id+"+ span").innerHTML = i+"%";     /* <---- Incremento el porcentaje y lo muestro en la etiqueta span */
			i++;
			fpAnimationFrame(animacion);          /* <------------------ Mientras que el contador no llega al porcentaje fijado la función vuelve a llamarse con fpAnimationFrame     */
		}

	}

		fpAnimationFrame(animacion);   /*  <---- Llamo la función animación por primera vez usando fpAnimationFrame para que se ejecute a 60fps  */

}

window.onload = function() {

	animateprogress("#html5",200);
}
document.querySelector ('#boton').addEventListener ('click', function() {
	animateprogress("#html5",200);
});
