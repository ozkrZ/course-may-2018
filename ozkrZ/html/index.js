(function() {
  'use strict';

  const dato = document.getElementById('myArticle');


  const API_URL = 'datos.json';

  fetch(API_URL)
    .then(response => response.json())
    .then(response => printResponse(response))
    .catch(err => console.log('Fallaste en la peticion' + err))

function printResponse(datos){
  let txtDiv = "<table border=1>"
  for (let prop in datos){
    txtDiv += `<tr>`
    for (let prop2 in datos[prop]){
      console.log(datos[prop][prop2]);
      txtDiv +=`<td> ${datos[prop][prop2]} </td>`
    }
    txtDiv += `</tr>`
  }
    txtDiv += `</table>`
    dato.innerHTML = txtDiv;
}

}());
