const Request = require('../helpers/request_helper.js');
const PubSub = require('../helpers/pub_sub.js');

const Munros = function () {
  this.data = null;
}

// Dogs.prototype.bindEvents = function () {
//   PubSub.subscribe('BreedFormView:form-submitted', (event) => {
//     const region = event.detail;
//     this.getData(region);
//   });
// }

// Munros.prototype.getFilteredData = function (region) {
//   const url = `https://munroapi.herokuapp.com/api/munros/region/${ region }`;
//   const request = new Request(url);
//   request.get()
//     .then((data) => (){
//       this.data = data.message;
//       PubSub.publish('Munros:filtered-list-ready', this.data);
//   })
//     .catch((err) =>
//       console.error(err)
//   )};




  Munros.prototype.getAllData = function () {
    const url = `https://munroapi.herokuapp.com/api/munros/`
    const request = new Request(url);
    request.get((data) => {
    this.data = data.map((munro) => {
       return {
      name: munro.name,
      height: munro.height,
      meaning: munro.meaning
    }});
    console.log(this.data);
  })
};



module.exports = Munros;
