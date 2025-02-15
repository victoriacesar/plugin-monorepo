export type DeviceType = 'android' | 'ios' | 'desktop';
export type ThemeType = 'dark' | 'light';
export interface ExtractedData {
  device: DeviceType;
  os: string;
  origin: string;
  themeSwitchCount: number;
}