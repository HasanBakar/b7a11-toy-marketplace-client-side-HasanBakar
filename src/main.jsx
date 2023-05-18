import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from "react-router-dom";
import './index.css'
import router from './Routers/Routers';
import AuthProviders from './Providers/AuthProviders/AuthProviders';

ReactDOM.createRoot(document.getElementById('root')).render(
  <div className="container mx-auto">
    <React.StrictMode>
      <AuthProviders>
          <RouterProvider router={router} />
      </AuthProviders>
    </React.StrictMode>
  </div>
)
