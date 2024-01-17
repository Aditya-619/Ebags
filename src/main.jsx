import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Contact from './Components/Contact.jsx'
import About from './Components/About.jsx'
import Body from './Components/Body.jsx'
import ProductDetail from './Components/ProductDetail.jsx'
import Categories from './Components/Categories.jsx'
import CategoryProducts from './Components/CategoryProducts.jsx'
import Cart from './Components/Cart.jsx'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './index.css'

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Body />,
      }, 
      {
        path: "/products/:id",
        element: <ProductDetail/>
      },
      {
        path: "/about",
        element: <About/>
      },
      {
        path: "/contact",
        element: <Contact/>
      },
      {
        path: "/categories",
        element: <Categories/>
      },
      {
        path: "/category/:name",
        element: <CategoryProducts/>
      },
      {
        path: "/cart",
        element: <Cart />
      },
      
    ]
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={appRouter} />
  </React.StrictMode>,
)
