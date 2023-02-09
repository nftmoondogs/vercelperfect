import MarketplaceConfigInterface from './MarketplaceConfigInterface';

export const openSea: MarketplaceConfigInterface = {
  name: 'Young Parrots',
  generateCollectionUrl: (marketplaceIdentifier: string, isMainnet: boolean) => 'https://' + (isMainnet ? 'www' : 'testnets') + '.app.youngparrotnft.com/core' + marketplaceIdentifier,
}
