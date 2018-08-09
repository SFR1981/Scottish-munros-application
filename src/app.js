const Munros = require('./models/munros.js');
const MunrosListView = require('./views/munro_list_view.js');

document.addEventListener('DOMContentLoaded', () => {
  const munros = new Munros();
  munros.bindEvents();
  const display = document.querySelector('div#munros-list')
  const munroListView = new MunrosListView(display);
  munroListView.bindEvents();

})
