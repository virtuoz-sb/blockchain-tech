/**
 * Use this file to configure your truffle project. It's seeded with some
 * common settings for different networks and features like migrations,
 * compilation and testing. Uncomment the ones you need or modify
 * them to suit your project as necessary.
 *
 * More information about configuration can be found at:
 *
 * truffleframework.com/docs/advanced/configuration
 *
 * To deploy via Infura you'll need a wallet provider (like truffle-hdwallet-provider)
 * to sign your transactions before they're sent to a remote public node. Infura accounts
 * are available for free at: infura.io/register.
 *
 * You'll also need a mnemonic - the twelve word phrase the wallet uses to generate
 * public/private key pairs. If you're publishing your code to GitHub make sure you load this
 * phrase from a file you've .gitignored so it doesn't accidentally become public.
 *
 */
const HDWalletProvider = require("@truffle/hdwallet-provider");
const privateKey = "07232c8213f0f76ffea58e3be9e6e7dedf716d0a9512a17c0486c45fa404c4b3";
const infuraId = "c8a44c9e107f440cae5a5006fc6de3d8";
const etherscanKey = "SKAAEJUCFE47QYY83ICT6TZN3TJ7BHZH1Y";
const bscscanKey = "8HAZRITDBXC6EQ2JW29II9TA9FQ6FMM94P";

module.exports = {
  /**
   * Networks define how you connect to your ethereum client and let you set the
   * defaults web3 uses to send transactions. If you don't specify one truffle
   * will spin up a development blockchain for you on port 9545 when you
   * run `develop` or `test`. You can ask a truffle command to use a specific
   * network from the command line, e.g
   *
   * $ truffle test --network <network-name>
   */

  networks: {
    // Useful for testing. The `development` name is special - truffle uses it by default
    // if it's defined here and no other network is specified at the command line.
    // You should run a client (like ganache-cli, geth or parity) in a separate terminal
    // tab if you use this network and you must also set the `host`, `port` and `network_id`
    // options below to some value.
    //
    development: {
      host: "127.0.0.1",     // Localhost (default: none)
      port: 7545,            // Standard Ethereum port (default: none)
      network_id: "*",       // Any network (default: none)
      //gas: 8000000,
      websockets: true
    },

    //Another network with more advanced options...
    mainnet: {
      provider: () => new HDWalletProvider(privateKey, 'wss://mainnet.infura.io/ws/v3/' + infuraId),
      network_id: 1,          // Mainnet's id
      // gas: 8000000,           // Gas sent with each transaction (default: ~6700000)
      // gasPrice: 200000000000,  // 20 gwei (in wei) (default: 100 gwei)
      confirmations: 1,    // # of confs to wait between deployments. (default: 0)
      timeoutBlocks: 200,  // # of blocks before a deployment times out  (minimum/default: 50)
      websockets: true,
      // networkCheckTimeout: 10000000,
      skipDryRun: true     // Skip dry run before migrations? (default: false for public nets )
    },
    // Useful for deploying to a public network.
    // NB: It's important to wrap the provider as a function.
    ropsten: {
      provider: () => new HDWalletProvider(privateKey, 'wss://ropsten.infura.io/ws/v3/' + infuraId),
      network_id: 3,       // Ropsten's id
      gas: 7500000,        // Ropsten has a lower block limit than mainnet
      gasPrice: 10000000000,
      confirmations: 2,    // # of confs to wait between deployments. (default: 0)
      timeoutBlocks: 200,  // # of blocks before a deployment times out  (minimum/default: 50)
      networkCheckTimeout: 100000,
      skipDryRun: true     // Skip dry run before migrations? (default: false for public nets )
    },

    rinkeby: {
      provider: () => new HDWalletProvider(privateKey, 'wss://rinkeby.infura.io/ws/v3/' + infuraId),
      network_id: 4,       // rinkeby's id
      gas: 7500000,        // rinkeby has a lower block limit than mainnet
      confirmations: 2,    // # of confs to wait between deployments. (default: 0)
      timeoutBlocks: 200,  // # of blocks before a deployment times out  (minimum/default: 50)
      skipDryRun: true     // Skip dry run before migrations? (default: false for public nets )
    },

    kovan: {
      provider: () => new HDWalletProvider(privateKey, 'wss://kovan.infura.io/ws/v3/' + infuraId),
      network_id: 42,       // Ropsten's id
      gas: 7500000,        // Ropsten has a lower block limit than mainnet
      gasPrice: 10000000000,
      confirmations: 2,    // # of confs to wait between deployments. (default: 0)
      timeoutBlocks: 200,  // # of blocks before a deployment times out  (minimum/default: 50)
      networkCheckTimeout: 100000,
      skipDryRun: true     // Skip dry run before migrations? (default: false for public nets )
    },

    //Another network with more advanced options...
    bscmainnet: {
      provider: () => new HDWalletProvider(privateKey, 'https://bsc-dataseed1.ninicoin.io/'),
      network_id: 56,          // bsc mainnet's id
      confirmations: 1,    // # of confs to wait between deployments. (default: 0)
      timeoutBlocks: 200,  // # of blocks before a deployment times out  (minimum/default: 50)
      networkCheckTimeout: 10000000,
      skipDryRun: true     // Skip dry run before migrations? (default: false for public nets )
    },

    // Useful for deploying to a public network.
    // NB: It's important to wrap the provider as a function.
    bsctestnet: {
      provider: () => new HDWalletProvider(privateKey, 'wss://data-seed-prebsc-1-s2.binance.org:8545/'),
      network_id: 97,       // bsc testnet's id
      confirmations: 2,    // # of confs to wait between deployments. (default: 0)
      timeoutBlocks: 200,  // # of blocks before a deployment times out  (minimum/default: 50)
      networkCheckTimeout: 1000000,
      skipDryRun: true     // Skip dry run before migrations? (default: false for public nets )
    },
    // Useful for private networks
    // private: {
      // provider: () => new HDWalletProvider(mnemonic, `https://network.io`),
      // network_id: 2111,   // This network is yours, in the cloud.
      // production: true    // Treats this network as if it was a public net. (default: false)
    // }
  },

  // Set default mocha options here, use special reporters etc.
  mocha: {
    // timeout: 100000
  },

  // Configure your compilers
  compilers: {
    solc: {
      version: "0.6.12",    // Fetch exact version from solc-bin (default: truffle's version)
      // docker: true,        // Use "0.5.1" you've installed locally with docker (default: false)
      settings: {          // See the solidity docs for advice about optimization and evmVersion
        optimizer: {
          enabled: true,
          runs: 200
        }
      }
      //  evmVersion: "byzantium"
      // }
    }
  },

  plugins: [
    'truffle-plugin-verify'
  ],

  api_keys: {
    etherscan: etherscanKey,
    bscscan: bscscanKey
  }
}
