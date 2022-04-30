require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hockey knife olympic system index reflect saddle purse install opera equal genuine'; 
let testAccounts = [
"0xe10b8dce876c52ed1926a81343073771b1a4e907bccad2aaa3b79670f30984fb",
"0x7d4a8108480efc38b844258a61c1e02b6537006ccc86ec9ed5a632763fa8b698",
"0x00975b5ee7d845d3326d712fc0a88740e242aa34fef356733894b0d98f665b96",
"0x31458ae309183fe9492dcb9c50db144dac8e0cc94337737005538f0abd8eabe6",
"0x5aa7c389c7be6a754e43acd1fafdcabe044ea33ab740e3732ec1edbebf8922c6",
"0xb7a4140af1a2ae6db6b2253a1cd02e16a725f0537b3ac1ccbd49397008f91049",
"0xed5497b5f9c780f7954efb869b887b5fad899f17f8c8d2bb25035fba4b70dccc",
"0x10a0a4e203658415f93197c0b2fcbf2db7c7362ef1ef8afea45c9edc4b56c1ba",
"0x6dcd94fb96d5e7c02ceb4c6a166b60789894d63ab0e62650466621d2ba598cfa",
"0xf5eb5c4094bffad4ab390cbc11e0a5e09bdc5a2cb7d46cfef545cc14986db80a"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

