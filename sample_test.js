import { Selector } from 'testcafe';

fixture('Getting Started')
  .page('https://www.google.com/');

test('First Test', async (t) => {
  await t
     .wait(3000);
});




