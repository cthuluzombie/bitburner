export async function main(ns) {
    const { rootUrl } = ns.flags([['rootUrl', 'https://raw.githubusercontent.com/cthuluzombie/bitburner/main/']]); 
    const folder = 'scripts';

    const files = [
            "hacknet-bot.js",
            "money.script",
            "scan.js",
            "worm/later.script",
            "worm/sooner.script",
            "ect/purchase-server-8gb.script",
            "ect/sigma-cosmetics.script"
    ];
    
    let filesImported = true;
    for (let file of files) {
        const remoteFileName = `${rootUrl}scripts/${file}?t=${Date.now()}`;
        const result = await ns.wget(remoteFileName, `/${folder}/${file}`);
        filesImported = filesImported && result;
        ns.tprint(`File: ${file}: ${result ? '✔️' : '❌'}`);
    }

    ns.tprint('='.repeat(20));
}
