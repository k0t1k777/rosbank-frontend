import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from 'src/components/App/App.tsx';
import 'src/components/App/App.scss';
import { Provider } from 'react-redux';
import { store } from 'src/store/store';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
);
