function showInfo(name) {
  clean();
  getInfo(name);
} //Cleans the description panel and then prints new description

function clean() {
  document.getElementById('description').innerHTML = '';
} //Cleans description panel

function getInfo(name) {switch (name) {
  case 'Cesar':
    document.getElementById('description').innerHTML = `<span class="name">Hello, my name is <br> ${name}</span><br>` + '<span class="badge">Sport, Foodie</span>' + '<p class="bio es">Si quieres convertirte en un cliente asiduo habla con el director. Para cualquier sugerencia o recomendación del barrio seguro te sorprenderá.</p>';
    break;
  case 'Esther':
    document.getElementById('description').innerHTML = `<span class="name">Hello, my name is <br> ${name}</span><br>` + '<span class="badge">Beauty, Foodie</span>' + '<p class="bio es">Conozco perfectamente el barrio, aunque especialmente todo lo relacionado con “beauty”, salones de belleza, peluquería…  </p><p class="bio es">Además como jefa de recepción, puedes contactarme para conseguir las mejores tarifas, tipo de habitación…</p>';
    break;
  default:
    document.getElementById('description').innerHTML =  `<span class="name">oopsie, no ${name} found</span>`
    break;
}
} //Prints the description for name