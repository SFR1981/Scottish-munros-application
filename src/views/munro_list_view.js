const PubSub = require('../helpers/pub_sub.js');
const MunroView = require('./munro_view.js');

const MunrosListView = function (container) {
  this.container = container;
  this.munros = null;
}

MunrosListView.prototype.bindEvents = function () {
  PubSub.subscribe('Munro:all-Munros', (evt) => {
    this.munros = evt.detail;
    console.log(this.munros);
  //  this.render();
  });
};

// ContinentsListView.prototype.render = function () {
//   this.continents.forEach((continent) => {
//     const continentView = new ContinentView(this.container, continent);
//     continentView.render();
//   });
// };



module.exports = ContinentsListView;
