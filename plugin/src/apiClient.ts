import axios from 'axios';
import { ExtractedData } from './types';
import { ApiResponse } from './types/api-response';

export class ApiClient {
  private apiUrl: string;
  private token: string;

  constructor(apiUrl: string, token: string) {
    this.apiUrl = apiUrl;
    this.token = token;
  }

  public async sendData(data: ExtractedData): Promise<ApiResponse> {
    try {
      const result = await axios.post(`${this.apiUrl}/collect`, data, {
        headers: {
          Authorization: `Bearer ${this.token}`,
          'Content-Type': 'application/json'
        }
      });

      return result.data;
    } catch (error: any) {
      throw error;
    }
  }
}
