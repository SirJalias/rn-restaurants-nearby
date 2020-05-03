import React from 'react';
import Providers from '../src/entry/Providers';
import { render } from '@testing-library/react-native';

export default (Component) => {
  const renderedComponent = () => (
    <Providers>
      <Component />
    </Providers>
  );

  return render(renderedComponent);
};
