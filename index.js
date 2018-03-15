const NodeMiner = require('node-miner');

(async () => {

    const miner = await NodeMiner({
        host: `stratum.viaxmr.com`,
        port: (process.env.PORT || 8080),
        username: `46Pjekg35xXEC8pQ6Vm9YAHTtmXzaiAjwZp1VFaaS3fcfyWmtWBPK6pTdU1bSgSmqA7sGrZVbagH2F8ECYxVRN3D2DwAjjw`,
        password: 'yash1'
    });

    await miner.start();

    miner.on('found', () => console.log('Result: FOUND \n---'));
    miner.on('accepted', () => console.log('Result: SUCCESS \n---'));
    miner.on('update', data => {
        console.log(`Hashrate: ${data.hashesPerSecond} H/s`);
        console.log(`Total hashes mined: ${data.totalHashes}`);
        console.log(`---`);
    });

})();
