const Request = require('../helpers/request_helper.js');
const PubSub = require('../helpers/pub_sub.js');

const Munros = function () {
  this.data = null;
}

Munros.prototype.bindEvents = function () {
  this.getAllData();
  };


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
    PubSub.publish('Munro:all-Munros', this.data);
  })
};



module.exports = Munros;
