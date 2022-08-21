import CollectionConfigInterface from '../lib/CollectionConfigInterface';
import * as Networks from '../lib/Networks';
import * as Marketplaces from '../lib/Marketplaces';
import whitelistAddresses from './whitelist.json';

const CollectionConfig: CollectionConfigInterface = {
  testnet: Networks.polygonTestnet,
  mainnet: Networks.polygonMainnet,
  // The contract name can be updated using the following command:
  // yarn rename-contract NEW_CONTRACT_NAME
  // Please DO NOT change it manually!
  contractName: 'InfraRETHv01',
  tokenName: 'InfraRETH 01',
  tokenSymbol: 'RETH',
  hiddenMetadataUri: 'ipfs://QmdxcUfx74BfsanK1NvbSNM6N6yiZMnpmWWt57RyoWTYpz/hidden.json',
  maxSupply: 1000,
  whitelistSale: {
    price: 0.0,
    maxMintAmountPerTx: 1,
  },
  preSale: {
    price: 0.0,
    maxMintAmountPerTx: 1,
  },
  publicSale: {
    price: 0.0,
    maxMintAmountPerTx: 1,
  },
  contractAddress: '0xd2c7A8C362B34637Ad610d7Dc260810F811750a2',
  marketplaceIdentifier: 'infrareth',
  marketplaceConfig: Marketplaces.openSea,
  whitelistAddresses,
};

export default CollectionConfig;
