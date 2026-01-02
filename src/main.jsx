import React from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from "react-router-dom";
import { router } from './Routes/Routes';
import { HelmetProvider } from 'react-helmet-async';
import AuthProviders from './Providers/AuthProviders';
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'

const queryClient = new QueryClient()
AOS.init({
  duration: 1400,
  // duration: 1200,
})


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <AuthProviders>
        <HelmetProvider>
          <RouterProvider router={router} />
        </HelmetProvider>
      </AuthProviders>
    </QueryClientProvider>
  </React.StrictMode>
)
