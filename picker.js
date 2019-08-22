function showInfo(name) {
  clean();
  getInfo(name);
} //Cleans the description panel and then prints new description

function clean() {
  document.getElementById('description').innerHTML = '';
} //Cleans description panel

function getInfo(name) {switch (name) {
  case 'César':
    document.getElementById('description').innerHTML = `<span class="name">Hello, my name is <br> ${name}</span><br>` + '<span class="badge">Sport, Foodie</span>' + '<p class="bio es">¿Eres cliente asiduo o te gustaría serlo? Habla conmigo, soy el director del hotel y estaré encantado de atenderte y contarte todo lo que sé sobre nuestro barrio.</p>';
    break;
  case 'Esther':
    document.getElementById('description').innerHTML = `<span class="name">Hello, my name is <br> ${name}</span><br>` + '<span class="badge">Beauty, Foodie</span>' + '<p class="bio es">Como jefa de recepción, puedo conseguirte las mejores tarifas o ayudarte a encontrar tu habitación perfecta… también puedes preguntarme por todo lo que tenga que ver con “beauty”: peluquerías, salones de belleza…</p>';
    break;
  case 'Verónica':
    document.getElementById('description').innerHTML = `<span class="name">Hello, my name is <br> ${name}</span><br>` + '<span class="badge">Fiesta, Cultureta</span>' + '<p class="bio es">Si buscas un bar para tomarte una copa o un local para darlo todo, no dudes en buscarme… ¡conozco bien la noche madrileña!</p>';
  break;
  case 'Ángel':
    document.getElementById('description').innerHTML = `<span class="name">Hello, my name is <br> ${name}</span><br>` + '<span class="badge">Moda, Fitness</span>' + '<p class="bio es">Para todo lo relacionado con moda masculina, animales y cómo ponerte en forma, let me know!</p>';
  break;
  case 'Rocío':
    document.getElementById('description').innerHTML = `<span class="name">Hello, my name is <br> ${name}</span><br>` + '<span class="badge">Instagrammer, Moda</span>' + '<p class="bio es">Instagramer, apasionada del yoga y coleccionista de zapatillas deportivas.</p>';
  break;
  case 'Elena':
    document.getElementById('description').innerHTML = `<span class="name">Hello, my name is <br> ${name}</span><br>` + '<span class="badge">Whisky, Healthy food</span>' + '<p class="bio es">Por culpa de mi aventura en Escocia me he hecho experta en whiskys, pero también en comida saludable.</p>';
  break;
  case 'Hanna':
    document.getElementById('description').innerHTML = `<span class="name">Hello, my name is <br> ${name}</span><br>` + '<span class="badge">Fotografía, Arte</span>' + '<p class="bio es">Nací en Bielorrusia (¡hablo ruso!) y soy amante de la Fotografía y la Historia del Arte.</p>';
  break;
  case 'Teo':
    document.getElementById('description').innerHTML = `<span class="name">Hello, my name is <br> ${name}</span><br>` + '<span class="badge">Moda, Deporte</span>' + '<p class="bio es">Fanático del deporte, me gusta especialmente bailar. ¡Lo mío es el shuffle dance!</p>';
  break;
  case 'Rebecca':
    document.getElementById('description').innerHTML = `<span class="name">Hello, my name is <br> ${name}</span><br>` + '<span class="badge">Mascotas, Beauty</span>' + '<p class="bio es">Sueca de nacimiento, madrileña de adopción y enamorada de los animales. Seré la mejor amiga de tu mascota.</p>';
  break;
  case 'Roberto':
    document.getElementById('description').innerHTML = `<span class="name">Hello, my name is <br> ${name}</span><br>` + '<span class="badge">Música, Moda Urbana</span>' + '<p class="bio es">Como jefe de cocina, estaré encantado de recomendarte restaurantes y decirte qué platos no te puedes perder en Madrid.</p>';
  break;
  case 'Miguel':
    document.getElementById('description').innerHTML = `<span class="name">Hello, my name is <br> ${name}</span><br>` + '<span class="badge">Deporte, Música</span>' + '<p class="bio es">Conciertos, buena música en vivo o salir a bailar, I rock!</p>';
  break;
  case 'Adrian':
    document.getElementById('description').innerHTML = `<span class="name">Hello, my name is <br> ${name}</span><br>` + '<span class="badge">Deporte, Foodie</span>' + '<p class="bio es">Soy el cocinero de The Captain, así que te animo a que te pases por nuestro restaurante… pero también te recomendaré los mejores sitios del barrio y de la ciudad.</p>';
  break;
  case 'Luis':
    document.getElementById('description').innerHTML = `<span class="name">Hello, my name is <br> ${name}</span><br>` + '<span class="badge">Fútbol, Arreglos</span>' + '<p class="bio es">Como encargado del servicio técnico del hotel, estoy a tu disposición para cualquier cosa que necesites reparar o si necesitas información de materiales, muebles…</p>';
  break;
  case 'AngelG':
    document.getElementById('description').innerHTML = `<span class="name">Hello, my name is <br> Ángel</span><br>` + '<span class="badge">Cultureta, Música</span>' + '<p class="bio es">Siempre me verás de noche, que es cuando trabajo. Como tengo niños, puedo sugerirte planes de familia o lo que necesites.</p>';
    // For AngelG name is printed manually because there is another Angel
  break;
  case 'Belén':
    document.getElementById('description').innerHTML = `<span class="name">Hello, my name is <br> ${name}</span><br>` + '<span class="badge">Música, Deporte</span>' + '<p class="bio es">Fanática del Atleti y experta en la vida del barrio.</p>';
  break;
  default:
    document.getElementById('description').innerHTML =  `<span class="name">oopsie, we couldn't find ${name} </span>`
    break;
}
} //Prints the description for name