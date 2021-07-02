const AWS = require('aws-sdk');

const documentClient = new AWS.DynamoDB.DocumentClient();

const Dynamo = {
  async get (ID, TableName) {
    const params = {
      TableName,
      Key: {
        ID
      }
    };

    const data = await documentClient.get(params).promise()

    if(!data || !data.Item){
      throw Error(`There was an error retrieving data for ID for ${ID} from ${TableName}`)
    }
    console.log(data);
    return data.Item;

  }
};

module.exports = Dynamo;
