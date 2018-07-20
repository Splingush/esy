const path = require('path');

const {initFixture, esyCommands} = require('../test/helpers');

it('Build - no deps', async done => {
  expect.assertions(1);

  const TEST_PATH = await initFixture('./build/fixtures/no-deps');
  const PROJECT_PATH = path.resolve(TEST_PATH, 'project');

  await esyCommands.build(PROJECT_PATH, TEST_PATH);

  const {stdout} = await esyCommands.x(PROJECT_PATH, 'no-deps');

  expect(stdout).toEqual(expect.stringMatching('no-deps'));

  done();
});
