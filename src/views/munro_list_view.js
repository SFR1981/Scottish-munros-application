const PubSub = require('../helpers/pub_sub.js');
const MunroView = require('./munro_view.js');

const MunrosListView = function (container) {
  this.container = container;
  this.munros = null;
}

MunrosListView.prototype.bindEvents = function () {
  PubSub.subscribe('Munro:all-Munros', (evt) => {
    this.munros = evt.detail;

    this.render();
  });

  PubSub.subscribe('Munros:filtered-list-ready', (evt)=>{
    this.munros = evt.detail;
    this.container.innerHTML = '';
    this.render()
  })
};

MunrosListView.prototype.render = function () {

  this.munros.forEach((munro) => {
    const munroView = new MunroView(this.container, munro);
    munroView.render();
  });
};



module.exports = MunrosListView;
