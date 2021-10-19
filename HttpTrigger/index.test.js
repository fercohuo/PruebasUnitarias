const httpFunctions = require('./index');
const context = require('../testing/Context');

test('Http trigger example', async () => {
  const request = {
    query: { name: 'schuc' },
  };
  await httpFunctions(context, request);
  expect(context.res.body).toContain('axample');
  expect(context.res.body).toEqual('Welcome, scoh example');
  expect(context.log.mock.calls.length).toBe(1);
});
