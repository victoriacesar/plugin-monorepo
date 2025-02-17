import { ApiClient } from './apiClient';
import { DataExtractor } from './dataExtractor';

export class Plugin {
  private dataExtrator: DataExtractor;
  private apiClient: ApiClient;
  private button!: HTMLButtonElement;
  private loadingIndicator!: HTMLSpanElement;
  private buttonMessage = 'Extrair Dados';

  constructor(apiUrl: string, token: string) {
    this.dataExtrator = new DataExtractor();
    this.apiClient = new ApiClient(apiUrl, token);
    this.setupButton();
  }

  private setupButton(): void {
    this.button = document.createElement('button');
    this.button.textContent = this.buttonMessage;
    this.button.style.position = 'fixed';
    this.button.style.bottom = '20px';
    this.button.style.right = '20px';
    this.button.style.zIndex = '1000';
    this.button.style.backgroundColor = '#F06F06';
    this.button.style.color = '#FFFFFF';
    this.button.style.padding = '10px 12px';
    this.button.style.borderRadius = '4px';
    this.button.style.transition = 'background-color 0.3s ease-in-out';

    this.loadingIndicator = document.createElement('span');
    this.loadingIndicator.textContent = ' ⌛';
    this.loadingIndicator.style.display = 'none';
    this.loadingIndicator.style.animation = 'transform 1s linear';

    this.button.appendChild(this.loadingIndicator);
    this.button.onclick = () => this.onButtonClick();
    document.body.appendChild(this.button);
  }

  private setLoading(isLoading: boolean): void {
    this.button.disabled = isLoading;
    this.loadingIndicator.style.display = isLoading ? 'inline' : 'none';
  }

  private setSuccess(message: string): void {
    this.button.textContent = `✅ ${message}`
    this.button.style.backgroundColor = '#20C6AD';
    setTimeout(() => {
      this.button.textContent = this.buttonMessage;
      this.button.style.backgroundColor = '#F06F06';
    }, 3000);
  }

  private setError(): void {
    this.button.textContent = '❌ Erro ao enviar!';
    this.button.style.backgroundColor = '#FF4D4D';
    setTimeout(() => {
      this.button.textContent = this.buttonMessage;
      this.button.style.backgroundColor = '#F06F06';
    }, 3000);
  }

  private async onButtonClick(): Promise<void> {
    this.setLoading(true);
    const data = this.dataExtrator.extractData();

    try {
      const { message } = await this.apiClient.sendData(data);
      console.log(message);
      this.setSuccess(message);
    } catch (error) {
      console.log(error);
      this.setError();
    } finally {
      this.setLoading(false);
    }
  }
}