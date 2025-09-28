import { genBrowserRouter } from "./browserRouter";
import { RouterProvider } from "react-router/dom";
import ReactDOM from 'react-dom/client';

const rootElement = document.getElementById('root');
if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <RouterProvider router={genBrowserRouter()} />,
  );
} else {
  throw new Error("Root element with id 'root' not found.");
}

// I am confused how we are finding something as root when there is no index.html
// that I can see.

// Even if you were to use that layout react component function that we can see in root.tsx
// it still leaves a large issue where the first thing that is done is that we add a 
// router provider.

// I feel like there is something in the react-router eco-space that is looking for 
// "root.tsx", and its trying to set us up using that 