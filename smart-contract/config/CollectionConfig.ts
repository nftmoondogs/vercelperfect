import CollectionConfigInterface from '../lib/CollectionConfigInterface';
import * as Networks from '../lib/Networks';
import * as Marketplaces from '../lib/Marketplaces';
import whitelistAddresses from './whitelist.json';

const CollectionConfig: CollectionConfigInterface = {
  testnet: Networks.ethereumTestnet,
  mainnet: Networks.coredao,
  // The contract name can be updated using the following command:
  // yarn rename-contract NEW_CONTRACT_NAME
  // Please DO NOT change it manually!
  contractName: 'OpenWatersOrigin',
  tokenName: 'OpenWatersOrigin',
  tokenSymbol: 'OpenWatersOrigin',
  hiddenMetadataUri: 'ipfs://bafybeigy2gyzt7mehran7n6ncjhwbe2drrov2dfl7dradg77p6kde53g7e/1.json',
  maxSupply: 67000,
  whitelistSale: {
    price: 0,
    maxMintAmountPerTx: 1,
  },
  preSale: {
    price: 0,
    maxMintAmountPerTx: 1,
  },
  publicSale: {
    price: 0,
    maxMintAmountPerTx: 1,
  },
  contractAddress: "0x2309AB919C86E0e2c72f0A0c755064254b67D455",
  marketplaceIdentifier: 'my-nft-token',
  marketplaceConfig: Marketplaces.openSea,
  whitelistAddresses,
};

export default CollectionConfig;
