"use strict";

let count = 0;

module.exports.handler = (event, context, callback) => {
  count++;
  const response = {
    statusCode: 200,
    body: JSON.stringify({
      message: `Visit number ${count}`,
      count,
      input: event
    })
  };

  callback(null, response);
};
