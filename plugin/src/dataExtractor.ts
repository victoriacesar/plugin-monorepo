import { ExtractedData, DeviceType } from "./types";

export class DataExtractor {
  private themeSwitchCount: number =  0;

  constructor() {}

  private getDeviceType(): DeviceType {
    const device = navigator.userAgent;
    if (/android/i.test(device)) return 'android';
    if (/iphone|ipad|ipod/i.test(device)) return 'ios';
    return 'desktop';
  }

  private getOS() {
    const platform = (window.navigator as any).userAgentData?.platform;
    if (platform.includes('win')) return 'Windows';
    if (platform.includes('mac')) return 'MacOS';
    if (platform.includes('linux')) return 'Linux';
    return 'Unknown';
  }

  public extractData(): ExtractedData {
    const device = this.getDeviceType();
    const os = this.getOS();

    return {
      device,
      os,
      origin: window.location.origin,
      themeSwitchCount: this.themeSwitchCount,
    }
  }
}