import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import { store } from './store/store.js'
import { GoogleOAuthProvider } from '@react-oauth/google';

ReactDOM.createRoot(document.getElementById('root')).render(
 // <React.StrictMode>

  <Provider store={store}>
    <GoogleOAuthProvider clientId="370248926718-fkpu3p6m5l9kd4cohbctll7d6mcaj734.apps.googleusercontent.com">
      <App />
    </GoogleOAuthProvider>
  </Provider>

    
 // </React.StrictMode>,
)
