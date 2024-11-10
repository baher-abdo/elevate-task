
import { Toaster } from 'react-hot-toast';
import './App.css'
import Home from './components/Home/Home';
import Layout from './components/Layout/Layout'
import PageNotFound from './components/PageNotFound/PageNotFound'
import ModalContextProvider from './context/ModalContext'
import ProductsContextProvider from './context/ProductsContext'
import { createBrowserRouter, RouterProvider } from "react-router-dom";

let router = createBrowserRouter([
  {
    path: "",
    element: <Layout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "*", element: <PageNotFound /> },
    ],
  },
]);

function App() {

  return (
    <>
      <ProductsContextProvider>
        <ModalContextProvider>
          <RouterProvider router={router}></RouterProvider>
          <Toaster/>
        </ModalContextProvider>
    </ProductsContextProvider>
    </>
  )
}

export default App
