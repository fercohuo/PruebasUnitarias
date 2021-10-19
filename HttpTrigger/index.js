module.exports = async function (context, req) {
  context.log('JavaScript HTTP trigger function 1.');

  const name = req.query.name || (req.body && req.body.name);
  const responseMessage = name
    ? 'Welcome, ' + name + 'example'
    : 'Pass a name in the query string or in the request body for a personalized response.';
  context.log('JavaScript HTTP trigger 2.');

  context.res = {
    // status: 200, /* Defaults to 200 */
    body: responseMessage,
  };
};
