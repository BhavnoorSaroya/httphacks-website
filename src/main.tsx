import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import Register from '@/pages/Register.tsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Toaster } from "sonner";
// import { Navbar } from './components/Navbar.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Toaster />
   <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>

  </StrictMode>,
)
