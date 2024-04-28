import { BrowserRouter, Routes, Route } from 'react-router-dom'

import {routes} from './config/routes'

import { Navbar } from "./components/Navbar";

// TODO - SITEWIDE Theme colors and apply

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        {routes.map((route: any, index:any) => (
          <Route key={index}
          path={route.path}
          element={<route.component />}
          />
          ))
        }
      </Routes>
    </BrowserRouter>
  )
}