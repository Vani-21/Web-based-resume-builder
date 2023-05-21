
import React from 'react';
import App from './App';

import {createRoot} from 'react-dom/client';
import  { ChakraProvider } from '@chakra-ui/react';


const root = createRoot(document.getElementById('root'));
root.render(
        <ChakraProvider>
          <App />
        </ChakraProvider>
);
