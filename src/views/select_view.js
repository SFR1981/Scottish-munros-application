const PubSub = require('../helpers/pub_sub.js');

const SelectView = function (selection) {
  this.selection = selection;
}


SelectView.prototype.bindEvents = function () {

  PubSub.subscribe('Munro:dropdown-region', (evt) => {
    const allRegions = evt.detail;
    console.log(allRegions);
    //this.populate(allRegions);

  });

  this.selection.addEventListener('change', (evt) => {
    const selectedRegion = evt.target.value;
    PubSub.publish('SelectView:change', selectedRegion);
  });
};

SelectView.prototype.populate = function(allRegions){
  allRegions.forEach((region, index) => {
    const option = document.createElement('option');
    option.textContent = region.name;
    option.value = region.name;
    this.selection.appendChild(option);


  })
}





module.exports = SelectView;
