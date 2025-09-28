import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from "react-router/dom";
import { genBrowserRouter } from './browserRouter';
import './app.css';

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <RouterProvider router={genBrowserRouter()}></RouterProvider>
    </StrictMode>,
)