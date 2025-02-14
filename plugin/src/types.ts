export type DeviceType = 'android' | 'ios' | 'desktop';
export interface ExtractedData {
  device: DeviceType;
  os: string;
  origin: string;
  themeSwitchCount: number;
}