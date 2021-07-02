const Responses = require('../common/API_Responses');
const fetch = require('node-fetch');

exports.handler = async event => {
  console.log('event', event)

  if(!event.pathParameters || !event.pathParameters.ID){
   // failed without an ID
    return Responses._400({message: 'missing the ID from the path'})
  }

  let ID = event.pathParameters.ID;

  if(data[ID]){
    // return the data
    return Responses._200(data[ID])
  }

  return Responses._400({message: 'no ID in data'});



}

// Mock data
 const data = {
     1: { name: 'Rice', brand: 'Uncle Ben' },
     2: { name: 'Potatoes', brand: 'None' },
     3: { name: 'Apple', brand: 'None' },
};

// const data = fetch("https://api.spoonacular.com/food/ingredients/search?query=banana&apiKey=3d01ebdfea1b4a4ca4dbf3aed3152c6c"
//               ).then((response) => response.json())
//                 .then((data) => console.log(data))
//               .catch((err) => console.log(err));

// //  