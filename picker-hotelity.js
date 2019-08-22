function showInfo(name) {
  clean();
  getInfo(name);
} //Cleans the description panel and then prints new description

function clean() {
  document.getElementById('description').innerHTML = '';
} //Cleans description panel

function getInfo(name) {switch (name) {
  case 'Sabrina':
    document.getElementById('description').innerHTML = `<span class="name">Hello, my name is <br> ${name}</span><br>` + '<span class="badge">Sport, Foodie</span>' + '<p class="bio es">Nuestra Host conoce los mejores planes para disfrutar de un completo día en familia.</p>';
    break;
  case 'Patricia':
    document.getElementById('description').innerHTML = `<span class="name">Hello, my name is <br> ${name}</span><br>` + '<span class="badge">Beauty, Foodie</span>' + '<p class="bio es">Patricia es nuestra Experience Manager y además conoce los locales más de moda y los mejores planes para disfrutar de la amplia oferta cultural de Madrid.</p>';
    break;
  case 'Lucía':
    document.getElementById('description').innerHTML = `<span class="name">Hello, my name is <br> ${name}</span><br>` + '<span class="badge">Beauty, Foodie</span>' + '<p class="bio es">Si vienes acompañado de tu perro a Triball, Lucía sabrá indicarte los mejores restaurantes y tiendas donde disfrutar acompañado de tu mascota.</p>';
  break;
  case 'Daniel':
    document.getElementById('description').innerHTML = `<span class="name">Hello, my name is <br> ${name}</span><br>` + '<span class="badge">Beauty, Foodie</span>' + '<p class="bio es">Gran aficionado a la fotografía, Daniel es un gran conocedor de las mejores rutas urbanas donde sacar el mejor partido a la luz y fotografiar los paisajes de la ciudad.</p>';
  break;
  case 'Fran':
    document.getElementById('description').innerHTML = `<span class="name">Hello, my name is <br> ${name}</span><br>` + '<span class="badge">Beauty, Foodie</span>' + '<p class="bio es">El compañero más geeky de Triball, no solo está siempre al tanto de las mejores tiendas de cómics y merchandising del barrio, también conoce los bares más auténticos de Madrid.</p>';
  break;
  case 'Carmen':
    document.getElementById('description').innerHTML = `<span class="name">Hello, my name is <br> ${name}</span><br>` + '<span class="badge">Beauty, Foodie</span>' + '<p class="bio es">Carmen conoce los mejores planes para pasar un día perfecto con los niños y además le encantan los museos. Sabrá recomendarte las mejores exposiciones para visitar en familia.</p>';
  break;
  case 'Pablo':
    document.getElementById('description').innerHTML = `<span class="name">Hello, my name is <br> ${name}</span><br>` + '<span class="badge">Beauty, Foodie</span>' + '<p class="bio es">Pablo podrá recomendarte los mejores restaurantes para cualquier ocasión y los planes más healthy para todos los deportistas que vengan a visitarnos.</p>';
  break;
  case 'Lorena':
    document.getElementById('description').innerHTML = `<span class="name">Hello, my name is <br> ${name}</span><br>` + '<span class="badge">Beauty, Foodie</span>' + '<p class="bio es">Lorena es una gran aficionada a la música y podrá recomendaros las mejores salas para disfrutar de actuaciones en directo, así como las tiendas más auténticas del barrio.</p>';
  break;
  case 'Odair':
    document.getElementById('description').innerHTML = `<span class="name">Hello, my name is <br> ${name}</span><br>` + '<span class="badge">Beauty, Foodie</span>' + '<p class="bio es">Odair es nuestro encargado de elaborar cada mañana los mejores smoothies para nuestros desayunos y es también un gran aficionado al running. ¡Pregúntale por las mejores rutas!</p>';
  break;
  case 'CarlosR':
    document.getElementById('description').innerHTML = `<span class="name">Hello, my name is <br> Carlos</span><br>` + '<span class="badge">Beauty, Foodie</span>' + '<p class="bio es">Carlos, nuestro responsable de mantenimiento, es además un gran aficionado al fútbol.</p>';
  break;
  case 'CarlosO':
    document.getElementById('description').innerHTML = `<span class="name">Hello, my name is <br> Carlos</span><br>` + '<span class="badge">Beauty, Foodie</span>' + '<p class="bio es">Conciertos, buena música en vivo o salir a bailar, I rock!</p>';
  break;
  default:
    document.getElementById('description').innerHTML =  `<span class="name">oopsie, we couldn't find ${name} </span>`
    break;
}
} //Prints the description for name