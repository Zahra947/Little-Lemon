import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import '@fontsource/karla';
import '@fontsource/markazi-text';

import App from './App';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
