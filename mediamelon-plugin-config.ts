export interface MediaMelonKPPluginConfig {  
  customerId: string;
  domainName: string;
  subscriberTag: string;
  subscriberId: string;
  subscriberType: string;
  playerName: string;
  playerVersion: string;
  playerBrand: string;
  playerModel: string;
  videoAssetInfo: {
    assetId: string;
    assetName: string;
    videoId: string;
    seriesTitle: string;
    episodeNumber: string;
    season: string;
    contentType: string;
    drmProtection: string;
    genre: string;
  }
  appName: string;
  appVersion: string;
  deviceMarketingName: string;
  deviceId: string;
  videoQuality: string;
  customTags: {}
};