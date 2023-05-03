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
  contractName: 'CoreTokyo',
  tokenName: 'CoreTokyo',
  tokenSymbol: 'CoreTokyo',
  hiddenMetadataUri: 'ipfs://bafybeigaecj7scy67bi2wtlco477m5uj3co36eauy6biz23wl4bf76x5cu/1.json',
  maxSupply: 9000,
  whitelistSale: {
    price: 0,
    maxMintAmountPerTx: 9000,
  },
  preSale: {
    price: 1,
    maxMintAmountPerTx: 2,
  },
  publicSale: {
    price: 0,
    maxMintAmountPerTx: 9000,
  },
  contractAddress: "0xfb291cE3EcE76D858c7f352B849d5C2ef01a8a32",
  marketplaceIdentifier: 'my-nft-token',
  marketplaceConfig: Marketplaces.openSea,
  whitelistAddresses,
};

export default CollectionConfig;
