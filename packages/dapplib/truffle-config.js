require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'give close brown slab carpet recipe magic exchange grace merry front swift'; 
let testAccounts = [
"0xcdecae86740b47b3be551b463fcdaa026ed7f6e62c851e0cae9d97ffd8cf48e4",
"0x03feb15a3ac508b41a821885feeb512ffc4fb873137aafa1d91f8689f67a757a",
"0xe0ba08afffefbd5c72a66b10eb5dd20d09e4c0a869ccfbb2017a2b0935c7cdc8",
"0xd4ec31edeb5efdf5373f4874d7e8f285281c86147e8abec09ae631afaed400e5",
"0xcc433ffc26ea35682d2904cb4e0c15143bc2b2ae12421693d79b7453b8636f82",
"0x24b576b1770a9268fd939d44445aed3bc6a55125cfcbe8f68cb4c914a608946c",
"0x5ae096f20dad14dce4666634c9d81122c9b808be992c634aa345b323e25a1df3",
"0xc2a27f8a924b9e3434001b8c7ff7cfd1dc6aae26cd059ce519bbe5057cbc4fa9",
"0xd3b54bc14ac1c1aabf6a487f031e99cacbbb41e31af59f0933e83322e3635af3",
"0x1a6bffde2d07da3e80755304f5cb84d4a492e40ea0b7ec5ed874605a8735c145"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

