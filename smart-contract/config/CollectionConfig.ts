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
  contractName: 'Moondogs',
  tokenName: 'Moondogs',
  tokenSymbol: 'MD',
  hiddenMetadataUri: 'ipfs://bafybeifjhpa5vkbr2vg5suqkbif7uz65pbrldwhefenw5hdflpk7lleusm/hidden.json',
  maxSupply: 5555,
  whitelistSale: {
    price: 0,
    maxMintAmountPerTx: 2000,
  },
  preSale: {
    price: 1,
    maxMintAmountPerTx: 2,
  },
  publicSale: {
    price: 2,
    maxMintAmountPerTx: 10,
  },
  contractAddress: "0x302330b329191324fe83fa6461a48f2e22406c9d",
  marketplaceIdentifier: 'my-nft-token',
  marketplaceConfig: Marketplaces.openSea,
  whitelistAddresses,
};

export default CollectionConfig;
