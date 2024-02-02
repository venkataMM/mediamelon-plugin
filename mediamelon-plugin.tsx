import { BasePlugin, KalturaPlayer} from '@playkit-js/kaltura-player-js';
// import { MediaMelonKPPluginConfig } from './mediamelon-plugin-config';
import {KALTURAPlayerMMSSIntgr} from 'mediamelon-kaltura-sdk'

export const pluginName = 'mediaMelonKPPlugin';

export class MediaMelonKPPlugin extends BasePlugin {
  public static defaultConfig: MediaMelonKPPluginConfig = {
    customerId: '',
    domainName: '',
    subscriberTag: '',
    subscriberId: '',
    subscriberType: '',
    playerName: '',
    playerVersion: '',
    playerBrand: '',
    playerModel: '',
    videoAssetInfo: {
      assetId: '',
      assetName: '',
      videoId: '',
      seriesTitle: '',
      episodeNumber: '',
      season: '',
      contentType: '',
      drmProtection: '',
      genre: ''      
    },
    appName: '',
    appVersion: '',
    deviceMarketingName: '',
    deviceId: '',
    videoQuality: '',
    customTags: {}
  };

  constructor(name: string, player: KalturaPlayer, config: Object) {
    super(name, player, config);

    var mmKalturaPlugin = new KALTURAPlayerMMSSIntgr();
    if (mmKalturaPlugin.getRegistrationStatus() === false) {
      mmKalturaPlugin.registerMMSmartStreaming(this.config.playerName, this.config.customerId, this.config.subscriberId, this.config.domainName, this.config.subscriberType, this.config.subscriberTag);
      mmKalturaPlugin.reportPlayerInfo(this.config.playerBrand, this.config.playerModel, this.config.playerVersion);
    }

    mmKalturaPlugin.reportAppInfo(this.config.appName, this.config.appVersion);
    mmKalturaPlugin.setDeviceInfo(this.config.deviceMarketingName);
    mmKalturaPlugin.reportDeviceId(this.config.deviceId);
    mmKalturaPlugin.reportVideoQuality(this.config.videoQuality);
    mmKalturaPlugin.initialize(player);
  }

  public static isValid(): boolean {
    return true;
  }

  updateConfig(update: Object): void {    
    super.updateConfig(update);    
  }
}


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
