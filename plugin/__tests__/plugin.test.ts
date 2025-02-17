import '@testing-library/jest-dom';
import { screen } from '@testing-library/dom';
import { Plugin } from '../src/plugin';
import { DataExtractor } from '../src/dataExtractor';

jest.mock('../src/dataExtractor');
const API_URL = 'http://localhost:test'
const API_TOKEN = 'mock-token';

describe('Plugin', () => {
  it('should inject a button into the DOM', async() => {
    jest.spyOn(window, 'alert').mockImplementation(() => {});
    new Plugin(API_URL, API_TOKEN);

    const button = await screen.findByText('Extrair Dados');
    expect(button).toBeInTheDocument(); 
    expect(button).toHaveTextContent('Extrair Dados');
    expect(button).toHaveStyle('position: fixed');
  });
  
  it('should extract data and send it on button click', async () => {
    const mockExtractData = jest.fn().mockReturnValue({
      device: 'android',
      os: 'Android 10',
      origin: 'http://localhost',
      themeSwitchCount: 2,
    });

    (DataExtractor as jest.Mock).mockImplementation(() => ({
      extractData: mockExtractData,
    }));

    const plugin = new Plugin(API_URL, API_TOKEN);
    await (plugin as any).onButtonClick();


    expect(mockExtractData).toHaveBeenCalled();
  });
});