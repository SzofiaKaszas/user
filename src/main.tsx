import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { User } from './User.tsx'
import { Support } from './Support.tsx'
import { createBrowserRouter, RouterProvider } from 'react-router';
import { Table } from './Table.tsx'

const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    children: [
      {index: true, Component: Table},
      {path: "/user/:id", Component: User},
      {path: "/support", Component: Support}
    ]
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
