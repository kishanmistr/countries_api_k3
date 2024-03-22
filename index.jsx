import {createRoot}  from  'react-dom/client'
import App from './App.jsx'
import { createBrowserRouter,RouterProvider} from "react-router-dom"
import Contact from './Components/Contact.jsx';
import Home from './Components/home.jsx';
import Error from './Components/Error.jsx';
import CountryDetail from './Components/CountryDetail.jsx';

const router = createBrowserRouter([
   {
     path: "/",
     element: <App/>,
     errorElement : <Error/>,
     children : [

      {
         path: "/",
         element: <Home />,
       },
      {
         path: "/contact",
         element: <Contact />,
       },
      {
         path: "/:country",
         element: <CountryDetail />,
       },

     ]
   },
   
 ]);


const root = createRoot(document.querySelector('#root'))
root.render(
   
   <RouterProvider router={router} />
)