function showInfo(name) {
  clean();
  getInfo(name);
} //Cleans the description panel and then prints new description

function clean() {
  document.getElementById('description').innerHTML = '';
} //Cleans description panel

function getInfo(name) {switch (name) {
  case 'Sabrina':
    document.getElementById('description').innerHTML = `<span class="name">Hello, my name is <br> ${name}</span><br>` + '<span class="badge">Sport, Foodie</span>' + '<p class="bio es">¿Eres cliente asiduo o te gustaría serlo? Habla conmigo, soy el director del hotel y estaré encantado de atenderte y contarte todo lo que sé sobre nuestro barrio.</p>';
    break;
  case 'Patricia':
    document.getElementById('description').innerHTML = `<span class="name">Hello, my name is <br> ${name}</span><br>` + '<span class="badge">Beauty, Foodie</span>' + '<p class="bio es">Como jefa de recepción, puedo conseguirte las mejores tarifas o ayudarte a encontrar tu habitación perfecta… también puedes preguntarme por todo lo que tenga que ver con “beauty”: peluquerías, salones de belleza…</p>';
    break;
  case 'Lucía':
    document.getElementById('description').innerHTML = `<span class="name">Hello, my name is <br> ${name}</span><br>` + '<span class="badge">Beauty, Foodie</span>' + '<p class="bio es">Si buscas un bar para tomarte una copa o un local para darlo todo, no dudes en buscarme… ¡conozco bien la noche madrileña!</p>';
  break;
  case 'Daniel':
    document.getElementById('description').innerHTML = `<span class="name">Hello, my name is <br> ${name}</span><br>` + '<span class="badge">Beauty, Foodie</span>' + '<p class="bio es">Para todo lo relacionado con moda masculina, animales y cómo ponerte en forma, let me know!</p>';
  break;
  case 'Fran':
    document.getElementById('description').innerHTML = `<span class="name">Hello, my name is <br> ${name}</span><br>` + '<span class="badge">Beauty, Foodie</span>' + '<p class="bio es">Instagramer, apasionada del yoga y coleccionista de zapatillas deportivas.</p>';
  break;
  case 'Carmen':
    document.getElementById('description').innerHTML = `<span class="name">Hello, my name is <br> ${name}</span><br>` + '<span class="badge">Beauty, Foodie</span>' + '<p class="bio es">Por culpa de mi aventura en Escocia me he hecho experta en whiskys, pero también en comida saludable.</p>';
  break;
  case 'Pablo':
    document.getElementById('description').innerHTML = `<span class="name">Hello, my name is <br> ${name}</span><br>` + '<span class="badge">Beauty, Foodie</span>' + '<p class="bio es">Nací en Bielorrusia (¡hablo ruso!) y soy amante de la Fotografía y la Historia del Arte.</p>';
  break;
  case 'Lorena':
    document.getElementById('description').innerHTML = `<span class="name">Hello, my name is <br> ${name}</span><br>` + '<span class="badge">Beauty, Foodie</span>' + '<p class="bio es">Fanático del deporte, me gusta especialmente bailar. ¡Lo mío es el shuffle dance!</p>';
  break;
  case 'Odair':
    document.getElementById('description').innerHTML = `<span class="name">Hello, my name is <br> ${name}</span><br>` + '<span class="badge">Beauty, Foodie</span>' + '<p class="bio es">Sueca de nacimiento, madrileña de adopción y enamorada de los animales. Seré la mejor amiga de tu mascota.</p>';
  break;
  case 'CarlosR':
    document.getElementById('description').innerHTML = `<span class="name">Hello, my name is <br> Carlos</span><br>` + '<span class="badge">Beauty, Foodie</span>' + '<p class="bio es">Como jefe de cocina, estaré encantado de recomendarte restaurantes y decirte qué platos no te puedes perder en Madrid.</p>';
  break;
  case 'CarlosO':
    document.getElementById('description').innerHTML = `<span class="name">Hello, my name is <br> Carlos</span><br>` + '<span class="badge">Beauty, Foodie</span>' + '<p class="bio es">Conciertos, buena música en vivo o salir a bailar, I rock!</p>';
  break;
  default:
    document.getElementById('description').innerHTML =  `<span class="name">oopsie, we couldn't find ${name} </span>`
    break;
}
} //Prints the description for name