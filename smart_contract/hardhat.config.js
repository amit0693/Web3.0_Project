

require ('@nomiclabs/hardhat-waffle');

module.export = {
  solidity: "0.8.0",
  networks: {
    
    ropsten: {
      url: 'https://eth-ropsten.alchemyapi.io/v2/D4otqRh61botVWA3WG5KsYVMilRai8ev',
      accounts: ['42686849cee34073eab476fe4a3937de2e5749ebba7bfc85889e40daeb9c6adb'],
    },
  },
};