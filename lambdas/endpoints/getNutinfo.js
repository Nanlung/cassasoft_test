const Responses = require('../common/API_Responses');
const Dynamo = require("../common/Dynamo");



exports.handler = async event => {
  console.log('event', event)

  if(!event.pathParameters || !event.pathParameters.ID){
   // failed without an ID
    return Responses._400({message: 'missing the ID from the path'})
  }

  let ID = event.pathParameters.ID;

  // compare get request and catch errors

  const food = await Dynamo.get(ID, tableName).catch(err => {
    console.log("error in Dyno Get request",err)
    return null
  })

  if (!user){
    return Responses._400({message: 'Failed to get food by ID'})
  }

  return Responses._200({food});

}