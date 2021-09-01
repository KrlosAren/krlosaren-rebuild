import { useState } from 'react';
import Layout from '../src/components/Layout/Layout';
import { UIContext } from '../src/context/UIContext';
import '../styles/main.scss';

function MyApp({ Component, pageProps }) {
  const [uiState, setUiState] = useState(false);

  return (
    <UIContext.Provider
      value={{
        uiState,
        setUiState,
      }}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </UIContext.Provider>
  );
}

export default MyApp;
