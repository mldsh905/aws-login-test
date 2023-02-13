  function buildResponse(statusCode, body){
    return {
        statusCode: statusCode,
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'POST, PUT, GET, OPTIONS',
            'Access-Control-Allow-Headers': 'Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With'
        },
        body: JSON.stringify(body)
    }
}

  function buildCORSResponse(statusCode, body) {
      return {
          statusCode: statusCode,
          headers: {
              "Access-Control-Allow-Origin": "*",
              "Access-Control-Allow-Headers": "content-type,X-Amz-Date,X-Amz-Security-Token,Authorization,X-Api-Key,X-Requested-With,Accept,Access-Control-Allow-Methods,Access-Control-Allow-Origin,Access-Control-Allow-Headers",
              "Access-Control-Allow-Methods": "OPTIONS,POST,GET,PUT,DELETE",
              "Content-Type": "application/json"
          },
          body: JSON.stringify(body)
      }
  }

module.exports.buildResponse = buildResponse;
module.exports.buildCORSResponse = buildCORSResponse;