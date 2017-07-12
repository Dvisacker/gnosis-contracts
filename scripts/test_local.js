const crypto = require('crypto')
const _ = require('lodash')
const { spawn, spawnSync } = require('child_process');

const gasLimit = '0x1312d00'
const balance = '0xffffffffffffffffffffffffffffffffffffffff'
const args = _.range(10).map(
    (pksrc) => [
        '--account',
        `0x${crypto.createHash('sha256').update(pksrc.toString()).digest('hex')},${balance}`
    ]).reduce((acc, args) => acc.concat(args), ['-l', gasLimit])

const testrpc = spawn('testrpc', args)

new Promise((resolve, reject) => {
    testrpc.stdout.on('data', (data) => {
        if(data.includes('Listening on localhost:8545')) {
            resolve()
        }
    });

    let error = ''

    testrpc.stderr.on('data', (data) => {
        error += data
    })

    testrpc.on('close', (code) => {
        reject(new Error(`testrpc exited with code ${code} and the following error:\n\n${error}`));
    });

}).then(() => {
    const { status, error } = spawnSync('truffle', ['test'], { stdio: 'inherit' })
    testrpc.kill()
    if(status != 0) {
        return Promise.reject(new Error(`truffle test exited with code ${status} and the following error:\n\n${error}`))
    }
    return Promise.resolve()
})
