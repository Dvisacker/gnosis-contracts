module.exports = {
    networks: {
        development: {
            host: "localhost",
            port: 8545,
            network_id: "*",
            gas: 0x1312d00 // TODO: sync with value in test_local.js
        },
        kovan: {
            host: "localhost",
            port: 8545,
            network_id: "42"
        },
        rinkeby: {
            host: "localhost",
            port: 8545,
            network_id: "4"
        },
    }
}
