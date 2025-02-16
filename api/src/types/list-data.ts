export interface Data {
  data: {
    device: string;
    origin: string;
    os: string;
    themeSwitchCount: number;
  };
  timestamp: number;
}

export interface DataList {
  [key: string]: Data;
}