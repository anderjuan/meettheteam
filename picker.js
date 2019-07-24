function showInfo(name) {
  clean();
  getInfo(name);
} //Cleans the description panel and then prints new description

function clean() {
  document.getElementById('description').innerHTML = '';
} //Cleans description panel

function getInfo(name) {switch (name) {
  case 'César':
    document.getElementById('description').innerHTML = `<span class="name">Hello, my name is <br> ${name}</span><br>` + '<span class="badge">Foodie</span>' + '<p class="bio es">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>';
    break;
  case 'María':
    document.getElementById('description').innerHTML = `<span class="name">Hello, my name is <br> ${name}</span><br>` + '<span class="badge">Night Owl</span>' + '<p class="bio es">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>';
    break;
  default:
    document.getElementById('description').innerHTML =  `oopsie, no ${name} found`
    break;
}
} //Prints the description for name