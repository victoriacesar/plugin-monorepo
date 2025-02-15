import { ExtractedData, DeviceType, ThemeType } from './types';

export class DataExtractor {
  private themeSwitchCount: number = 0;
  private currentTheme: ThemeType = 'light';

  constructor() {
    this.setupThemeListener();
  }

  private setupThemeListener(): void {
    const themeButton = document.querySelector('[data-testid="switch-theme"]');
    themeButton?.addEventListener('click', () => {
      const newTheme = document.documentElement.classList.contains('dark')
        ? 'dark'
        : 'light';

      if (newTheme !== this.currentTheme) {
        this.themeSwitchCount++;
        this.currentTheme = newTheme;
      }
    });
  }

  private getDeviceType(): DeviceType {
    const device = navigator.userAgent;
    if (/android/i.test(device)) return 'android';
    if (/iphone|ipad|ipod/i.test(device)) return 'ios';
    return 'desktop';
  }

  private getOS() {
    return (window.navigator as any).userAgentData?.platform;
  }

  public extractData(): ExtractedData {
    const device = this.getDeviceType();
    const os = this.getOS();

    return {
      device,
      os,
      origin: window.location.origin,
      themeSwitchCount: this.themeSwitchCount,
    };
  }
}
