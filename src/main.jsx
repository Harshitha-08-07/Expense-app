import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom';
import { Fetchcontext } from './Contextapi/Fetchcontext.jsx';
import { Searchcontext } from './Contextapi/Searchcontext.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <Searchcontext>
    <Fetchcontext>
    <App />
    </Fetchcontext>
    </Searchcontext>
    </BrowserRouter>
  </StrictMode>,
)
