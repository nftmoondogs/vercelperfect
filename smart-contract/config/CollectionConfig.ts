import CollectionConfigInterface from '../lib/CollectionConfigInterface';
import * as Networks from '../lib/Networks';
import * as Marketplaces from '../lib/Marketplaces';
import whitelistAddresses from './whitelist.json';

const CollectionConfig: CollectionConfigInterface = {
  testnet: Networks.ethereumTestnet,
  mainnet: Networks.coredaotestnet,
  // The contract name can be updated using the following command:
  // yarn rename-contract NEW_CONTRACT_NAME
  // Please DO NOT change it manually!
  contractName: 'Moondogs',
  tokenName: 'Moondogs',
  tokenSymbol: 'MD',
  hiddenMetadataUri: 'ipfs://bafybeifjhpa5vkbr2vg5suqkbif7uz65pbrldwhefenw5hdflpk7lleusm/hidden.json',
  maxSupply: 5555,
  whitelistSale: {
    price: 0,
    maxMintAmountPerTx: 5555,
  },
  preSale: {
    price: 0.07,
    maxMintAmountPerTx: 2,
  },
  publicSale: {
    price: 0.2,
    maxMintAmountPerTx: 10,
  },
  contractAddress: "0x5eb0321c2db5c45371a538055bab3a146462a5f4",
  marketplaceIdentifier: 'my-nft-token',
  marketplaceConfig: Marketplaces.openSea,
  whitelistAddresses,
};

export default CollectionConfig;
