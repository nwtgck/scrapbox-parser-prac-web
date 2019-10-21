import * as scrapboxParser from '@progfay/scrapbox-parser';

const projectName = 'help';
const pageName = 'syntax';

(async () => {
  const res = await fetch(`https://cors-anywhere.herokuapp.com/https://scrapbox.io/api/pages/${projectName}/${pageName}/text`);
  const text = await res.text();
  const parsed = scrapboxParser(text);
  // Log parsed object
  console.log(parsed);
  // Print JSON on screen
  // TODO: Poor json printing
  document.write(`<pre>${JSON.stringify(parsed, null, '  ')}</pre>`);
})();
