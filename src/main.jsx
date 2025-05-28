import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { HelmetProvider } from 'react-helmet-async';
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';

import { RouterProvider } from 'react-router-dom';

import router from './routes/router';

import AuthProvider from './providers/AuthProvider';

import { Toaster } from 'react-hot-toast';


// Create a client
const queryClient = new QueryClient()

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
    <HelmetProvider>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
        <Toaster
          position="top-center"
          reverseOrder={false}
        />
      </QueryClientProvider> 
      </HelmetProvider>
    </AuthProvider>
  </StrictMode>
)


// import React from 'react'
// import ReactDOM from 'react-dom/client'

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <h1>Hello Vite React</h1>
// )
