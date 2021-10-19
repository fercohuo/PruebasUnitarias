const httpFunctions = require('./index');
const context = require('../testing/Context');

test('Http trigger example', async () => {
  const request = {
    query: { name: 'coh' },
  };
  await httpFunctions(context, request);
  expect(context.res.body).toContain('axample');
  expect(context.res.body).toEqual('Welcome, coh example');
  expect(context.log.mock.calls.length).toBe(1);
});
