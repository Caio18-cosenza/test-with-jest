import React from 'react';
import { render } from '@testing-library/react-native';

import App from '../App';

it('Verificar se existe texto na tela', () => {
  const { getByText } = render(<App />);

  const text = getByText('Open up App.tsx to start working on your app!');

  expect(text).toBeTruthy();
});

it('Verificar se a propriedade testID do componente funciona', () => {
  const { findAllByTestId } = render(<App />);
  const element = findAllByTestId('Texto que vai mostrar o test');

  expect(element).toBeTruthy();
});
