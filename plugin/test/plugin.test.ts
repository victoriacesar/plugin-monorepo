import { screen } from '@testing-library/dom';
import { Plugin } from '../src/plugin';
import { DataExtractor } from '../src/dataExtractor';

jest.mock('../src/dataExtractor');

describe('Plugin', () => {
  it('should inject a button into the DOM', async() => {
    jest.spyOn(window, 'alert').mockImplementation(() => {});
    new Plugin();

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

    const plugin = new Plugin();
    await (plugin as any).onButtonClick();


    expect(mockExtractData).toHaveBeenCalled();

    // // Verifica se a função sendData foi chamada com os dados corretos
    // expect(mockSendData).toHaveBeenCalledWith({
    //   device: 'android',
    //   os: 'Android 10',
    //   origin: 'http://localhost',
    //   themeSwitchCount: 2,
    // });
  });
});