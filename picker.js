function showInfo(name) {
  clean();
  getInfo(name);
} //Cleans the description panel and then prints new description

function clean() {
  document.getElementById('description').innerHTML = '';
} //Cleans description panel

function getInfo(name) {switch (name) {
  case 'César':
    document.getElementById('description').innerHTML = `<span class="name">Hello, my name is <br> ${name}</span><br>` + '<span class="badge">Sport, Foodie</span>' + '<p class="bio es">¿Eres cliente asiduo o te gustaría serlo? Habla conmigo, soy el director del hotel y estaré encantado de atenderte y contarte todo lo que sé sobre nuestro barrio.</p>' + '<p class="bio en">Are you a frequent stayer or would you like to be one? Come and talk to me, I am the hotel director and would be more than happy to help you out and tell you all there is to know about our neighbourhood.</p>';
    break;
  case 'Esther':
    document.getElementById('description').innerHTML = `<span class="name">Hello, my name is <br> ${name}</span><br>` + '<span class="badge">Beauty, Foodie</span>' + '<p class="bio es">Como jefa de recepción, puedo conseguirte las mejores tarifas o ayudarte a encontrar tu habitación perfecta… también puedes preguntarme por todo lo que tenga que ver con “beauty”: peluquerías, salones de belleza…</p>' + '<p class="bio en">As head of reception, I can get you the best rates or help you find your perfect room. I can also help with all your beauty needs, from hairdressers to beauty parlors, ask away!</p>';
    break;
  case 'Verónica':
    document.getElementById('description').innerHTML = `<span class="name">Hello, my name is <br> ${name}</span><br>` + '<span class="badge">Fiesta, Cultureta</span>' + '<p class="bio es">Si buscas un bar para tomarte una copa o un local para darlo todo, no dudes en buscarme… ¡conozco bien la noche madrileña!</p>' + '<p class="bio en">If you are looking for a bar to have a drink or somewhere local to dance the night away, look for me. I know all the best places for a great Madrid night out.</p>';
  break;
  case 'Ángel':
    document.getElementById('description').innerHTML = `<span class="name">Hello, my name is <br> ${name}</span><br>` + '<span class="badge">Moda, Fitness</span>' + '<p class="bio es">Para todo lo relacionado con moda masculina, animales y cómo ponerte en forma, let me know!</p>' + '<p class="bio en">For everything related to male fashion, animals and how to keep fit, let me know!</p>';
  break;
  case 'Rocío':
    document.getElementById('description').innerHTML = `<span class="name">Hello, my name is <br> ${name}</span><br>` + '<span class="badge">Instagrammer, Moda</span>' + '<p class="bio es">Instagramer, apasionada del yoga y coleccionista de zapatillas deportivas.</p>' + '<p class="bio en">Instagramer, passion for yoga and sports shoe collector.</p>';
  break;
  case 'Elena':
    document.getElementById('description').innerHTML = `<span class="name">Hello, my name is <br> ${name}</span><br>` + '<span class="badge">Whisky, Healthy food</span>' + '<p class="bio es">Por culpa de mi aventura en Escocia me he hecho experta en whiskys, pero también en comida saludable.</p>' + '<p class="bio en">Due to my adventures in Scotland, I am now an expert in whisky. I can also talk to you about healthy food.</p>';
  break;
  case 'Hanna':
    document.getElementById('description').innerHTML = `<span class="name">Hello, my name is <br> ${name}</span><br>` + '<span class="badge">Fotografía, Arte</span>' + '<p class="bio es">Nací en Bielorrusia (¡hablo ruso!) y soy amante de la Fotografía y la Historia del Arte.</p>' + '<p class="bio en">If you are looking for a bar to have a drink or somewhere local to dance the night away, look for me. I know all the best places for a great Madrid night out.</p>' + '<p class="bio en">Born in Belarus, I am a lover of photography and art history. Oh, and I also speak Russian </p>';
  break;
  case 'Teo':
    document.getElementById('description').innerHTML = `<span class="name">Hello, my name is <br> ${name}</span><br>` + '<span class="badge">Moda, Deporte</span>' + '<p class="bio es">Fanático del deporte, me gusta especialmente bailar. ¡Lo mío es el shuffle dance!</p>' + '<p class="bio en">Sports enthusiast, especially dancing! The ‘shuffle’ is definitely my favourite!</p>';
  break;
  case 'Rebecca':
    document.getElementById('description').innerHTML = `<span class="name">Hello, my name is <br> ${name}</span><br>` + '<span class="badge">Mascotas, Beauty</span>' + '<p class="bio es">Sueca de nacimiento, madrileña de adopción y enamorada de los animales. Seré la mejor amiga de tu mascota.</p>' + '<p class="bio en">Swedish by birth, Madrileña by choice. I´ll be your pets´ best friend.</p>';
  break;
  case 'Roberto':
    document.getElementById('description').innerHTML = `<span class="name">Hello, my name is <br> ${name}</span><br>` + '<span class="badge">Música, Moda Urbana</span>' + '<p class="bio es">Como jefe de cocina, estaré encantado de recomendarte restaurantes y decirte qué platos no te puedes perder en Madrid.</p>' + '<p class="bio en">As Head of the Kitchen I’d be delighted to recommend restaurants and tell you what dishes you really cannot miss out on when in Madrid.</p>';
  break;
  case 'Miguel':
    document.getElementById('description').innerHTML = `<span class="name">Hello, my name is <br> ${name}</span><br>` + '<span class="badge">Deporte, Música</span>' + '<p class="bio es">Conciertos, buena música en vivo o salir a bailar, I rock!</p>' + '<p class="bio en">Concerts, great live music to watch or to dance, I rock!</p>';
  break;
  case 'Adrian':
    document.getElementById('description').innerHTML = `<span class="name">Hello, my name is <br> ${name}</span><br>` + '<span class="badge">Deporte, Foodie</span>' + '<p class="bio es">Soy el cocinero de The Captain, así que te animo a que te pases por nuestro restaurante… pero también te recomendaré los mejores sitios del barrio y de la ciudad.</p>' + '<p class="bio en">I am the chef at The Captain, I encourage you to stop by our restaurant and try our great food. I can also recommend the best places to eat, both in this neighbourhood and the whole city for that matter.</p>';
  break;
  case 'Luis':
    document.getElementById('description').innerHTML = `<span class="name">Hello, my name is <br> ${name}</span><br>` + '<span class="badge">Fútbol, Arreglos</span>' + '<p class="bio es">Como encargado del servicio técnico del hotel, estoy a tu disposición para cualquier cosa que necesites reparar o si necesitas información de materiales, muebles…</p>' + '<p class="bio en">As hotel technical service manager, I am here for anything you need to repair or if you need information on material, furniture…</p>';
  break;
  case 'AngelG':
    document.getElementById('description').innerHTML = `<span class="name">Hello, my name is <br> Ángel</span><br>` + '<span class="badge">Cultureta, Música</span>' + '<p class="bio es">Siempre me verás de noche, que es cuando trabajo. Como tengo niños, puedo sugerirte planes de familia o lo que necesites.</p>' + '<p class="bio en">You will more than likely find me at night time, which is when I work. As I have children, I can give you great advice on family days out or anything related to family life.</p>';
    // For AngelG name is printed manually because there is another Angel
  break;
  case 'Belén':
    document.getElementById('description').innerHTML = `<span class="name">Hello, my name is <br> ${name}</span><br>` + '<span class="badge">Música, Deporte</span>' + '<p class="bio es">Fanática del Atleti y experta en la vida del barrio.</p>' + '<p class="bio en">Athletico Madrid fan and expert when it comes to neighbourhood life.</p>';
  break;
  default:
    document.getElementById('description').innerHTML =  `<span class="name">oopsie, we couldn't find ${name} </span>`
    break;
}
} //Prints the description for name