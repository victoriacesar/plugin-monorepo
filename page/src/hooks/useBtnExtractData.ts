import { useEffect } from 'react';

const useBtnExtractData = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = '/plugin.js';
    script.async = true;

    script.onload = () => {
      console.log('Plugin carregado com sucesso!');
    };

    script.onerror = () => {
      console.error('Erro ao carregar o plugin.');
    };

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);
};

export default useBtnExtractData;
