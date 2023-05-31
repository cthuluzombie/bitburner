export async function main(ns) {
  const rootUrl = 'raw.githubusercontent.com/cthuluzombie/bitburner/main/';
  const downloadFileName = `${rootUrl}download.js?t=${Date.now()}`;
  await ns.wget(downloadFileName, `/scripts/download.js`);
  ns.run(`/scripts/download.js`, 1, `--rootUrl=${rootUrl}`);
}
