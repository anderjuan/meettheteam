function showInfo(name) {
  clean();
  getInfo(name);
} //Cleans the description panel and then prints new description

function clean() {
  document.getElementById('description').innerHTML = '';
} //Cleans description panel

function getInfo(name) {switch (name) {
  case 'Sabrina':
    document.getElementById('description').innerHTML = `<span class="name">Hello, my name is <br> ${name}</span><br>` + '<span class="badge">Family, Rock music</span>' + '<p class="bio es">Nuestra Host conoce los mejores planes para disfrutar de un completo día en familia.</p>' + '<p class="bio en">Our host knows the best things to do to enjoy a great family day out.</p>';
    break;
  case 'Patricia':
    document.getElementById('description').innerHTML = `<span class="name">Hello, my name is <br> ${name}</span><br>` + '<span class="badge">Party, Cultura</span>' + '<p class="bio es">Patricia es nuestra Experience Manager y además conoce los locales más de moda y los mejores planes para disfrutar de la amplia oferta cultural de Madrid.</p>' + '<p class="bio en">Patricia is our Experience Manager. As well as knowing all about fashion stores in the city, she also knows how to enjoy all of Madrid’s cultural offerings to the fullest.</p>';
    break;
  case 'Lucía':
    document.getElementById('description').innerHTML = `<span class="name">Hello, my name is <br> ${name}</span><br>` + '<span class="badge">Mascotas, Shopping</span>' + '<p class="bio es">Si vienes acompañado de tu perro a Triball, Lucía sabrá indicarte los mejores restaurantes y tiendas donde disfrutar acompañado de tu mascota.</p>' + '<p class="bio en">If you come with your dog to Triball, Lucia can you tell you the best restaurants and shops where you can go with your pet.</p>';
  break;
  case 'Daniel':
    document.getElementById('description').innerHTML = `<span class="name">Hello, my name is <br> ${name}</span><br>` + '<span class="badge">Fotografía, Foodie</span>' + '<p class="bio es">Gran aficionado a la fotografía, Daniel es un gran conocedor de las mejores rutas urbanas donde sacar el mejor partido a la luz y fotografiar los paisajes de la ciudad.</p>' + '<p class="bio en">A lover of photography, Daniel can tell you all there is to know about the best places to go and where to get the best light and photographs of the city landscape.</p>';
  break;
  case 'Fran':
    document.getElementById('description').innerHTML = `<span class="name">Hello, my name is <br> ${name}</span><br>` + '<span class="badge">Concerts, Geeky</span>' + '<p class="bio es">El compañero más geeky de Triball, no solo está siempre al tanto de las mejores tiendas de cómics y merchandising del barrio, también conoce los bares más auténticos de Madrid.</p>' + '<p class="bio en">The biggest geek in Triball, not only is Fran up to date with the best comic and merchandising stores in the neighbourhood, he also knows the most authentic bars in Madrid.</p>';
  break;
  case 'Carmen':
    document.getElementById('description').innerHTML = `<span class="name">Hello, my name is <br> ${name}</span><br>` + '<span class="badge">Cultura, Family</span>' + '<p class="bio es">Carmen conoce los mejores planes para pasar un día perfecto con los niños y además le encantan los museos. Sabrá recomendarte las mejores exposiciones para visitar en familia.</p>' + '<p class="bio en">Carmen knows how to spend the perfect day out with the kids and especially loves museums. She can recommend the best exhibitions for all the family to visit.</p>';
  break;
  case 'Pablo':
    document.getElementById('description').innerHTML = `<span class="name">Hello, my name is <br> ${name}</span><br>` + '<span class="badge">Foodie, Music</span>' + '<p class="bio es">Pablo podrá recomendarte los mejores restaurantes para cualquier ocasión y los planes más healthy para todos los deportistas que vengan a visitarnos.</p>' + '<p class="bio en">Pablo could talk to you all day about the best restaurants to go to for any occasion. He can also recommend health and fitness ideas for all athletes that come to stay.</p>';
  break;
  case 'Lorena':
    document.getElementById('description').innerHTML = `<span class="name">Hello, my name is <br> ${name}</span><br>` + '<span class="badge">Live Music, Shopping</span>' + '<p class="bio es">Lorena es una gran aficionada a la música y podrá recomendaros las mejores salas para disfrutar de actuaciones en directo, así como las tiendas más auténticas del barrio.</p>' + '<p class="bio en">Lorena is a great lover of music and can recommend the best places to watch live music, as well as the most authentic shops in the neighbourhood.</p>';
  break;
  case 'Odair':
    document.getElementById('description').innerHTML = `<span class="name">Hello, my name is <br> ${name}</span><br>` + '<span class="badge">Healthy Food, Running</span>' + '<p class="bio es">Odair es nuestro encargado de elaborar cada mañana los mejores smoothies para nuestros desayunos y es también un gran aficionado al running. ¡Pregúntale por las mejores rutas!</p>' + '<p class="bio en">Odair is in charge of creating the best smoothies for breakfast every day and is also a great runner! Ask him about the best routes!</p>';
  break;
  case 'Carlos':
    document.getElementById('description').innerHTML = `<span class="name">Hello, my name is <br> ${name}</span><br>` + '<span class="badge">Futbol</span>' + '<p class="bio es">Carlos, nuestro responsable de mantenimiento, es además un gran aficionado al fútbol.</p>' + '<p class="bio en">Carlos, our head of maintenance, is also a big football fan.</p>';
  break;
  default:
    document.getElementById('description').innerHTML =  `<span class="name">oopsie, we couldn't find ${name} </span>`
    break;
}
} //Prints the description for name