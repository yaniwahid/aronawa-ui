import React from 'react';
import createCache from '@emotion/cache';
import { CacheProvider } from '@emotion/react';
import { ChakraProvider } from '@chakra-ui/react';
import AronawaUI from '../theme';

function EmotionCacheProvider({ nonce, children }) {
  const cache = createCache({ key: 'csp', nonce });
  return <CacheProvider value={cache}>{children}</CacheProvider>;
}

export const ThemeProvider = ({ children, nonce, ...props }) => {
  return (
    <EmotionCacheProvider nonce={nonce}>
      <ChakraProvider theme={AronawaUI} {...props}>
        {children}
      </ChakraProvider>
    </EmotionCacheProvider>
  );
};
