import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ZeitlerForceDocumentation } from './zeitlerForceDocumentation'
import {RouterProvider} from "react-rou"

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <ZeitlerForceDocumentation></ZeitlerForceDocumentation>
    </StrictMode>,
)

