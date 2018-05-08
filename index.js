(function() {
  'use strict';

  document.querySelector('.name-list');

  // document.querySelectorAll('.name-list');
  //
  // document.getElementByClassName('')
  //
  // document.getElementById('.name-list');
  //
  // document.getElemetByTagName('.name-list');


  const API_URL = 'datos.js';

  fetch(API_URL)
    .then(response => response.json())
    .then(response => printResponse(response.datos))
    .catch(err => console.log('Fallaste en la peticion' + err))

function printResponse(datos){
  article.innerHTML = datos[0].nombre;
}


}());
