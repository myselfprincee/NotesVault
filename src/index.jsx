import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
// import { PersistQueryClientProvider } from '@tanstack/react-query-persist-client'
// import { createSyncStoragePersister } from '@tanstack/query-sync-storage-persister'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { HelmetProvider } from 'react-helmet-async';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      cacheTime: 1000 * 60 * 60 * 24, // 24 hours
    },
  },
})

// const persister = createSyncStoragePersister({
//   storage: window.localStorage,
// })

// persistQueryClient({
//   queryClient,
//   persistor: localStoragePersistor,
// });

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools buttonPosition='bottom-right' initialIsOpen={false} />
      < App />
    </QueryClientProvider>
  </HelmetProvider>
  // </React.StrictMode>

);