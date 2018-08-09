const PubSub = require('../helpers/pub_sub.js');

const MunroView = function (container, munro) {
  this.container = container;
  this.munro = munro;
};

MunroView.prototype.render = function () {
  
  const munroContainer = document.createElement('div');
  munroContainer.classList.add('munro');

  const name = document.createElement('h3');
  name.textContent = this.munro.name;
  this.container.appendChild(name);
  const miniList = document.createElement('ul');
  const height = document.createElement('li');
  height.textContent = `Height: ${this.munro.height}m`;
  miniList.appendChild(height);
  const meaning = document.createElement('li');
  meaning.textContent = `Meaning: ${this.munro.meaning}`;
  miniList.appendChild(meaning);
  this.container.appendChild(miniList);


  // const countriesList = this.createCountriesList();
  // continentContainer.appendChild(countriesList);
  //
  // this.continentsContainer.appendChild(continentContainer);
};


module.exports = MunroView;
