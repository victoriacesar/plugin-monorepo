import { DataExtractor } from "./dataExtractor";

export class Plugin {
  private dataExtrator: DataExtractor;

  constructor() {
    this.dataExtrator = new DataExtractor();
    this.setupButton();
  }

  private setupButton(): void {
    const button = document.createElement('button');
    button.textContent = 'Extrair Dados';
    button.style.position = 'fixed';
    button.style.bottom = '20px';
    button.style.right = '20px';
    button.style.zIndex = '1000';
    button.onclick = () => this.onButtonClick();
    document.body.appendChild(button);
  }

  private async onButtonClick(): Promise<void> {
    const data = this.dataExtrator.extractData();
    alert('Dados extraídos e enviados com sucesso!');
  }
}