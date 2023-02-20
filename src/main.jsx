import { ChakraProvider } from '@chakra-ui/react'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import React from 'react'
import ReactDOM from 'react-dom/client'
import { App }from './App'

import { LaunchItem } from './components/LaunchItem';
import { LaunchDetail } from './components/LaunchDetail';
import { LaunchList } from './components/LaunchList';


const router = createBrowserRouter([
  {
    path: "/",
    element: <LaunchItem/>,
  },
  {
    path: "/",
    element: <LaunchDetail/>,
  },
  {
    path: "/",
    element: <LaunchList/>,
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider>
      <RouterProvider router={router}/>
        <App />
    </ChakraProvider>
  </React.StrictMode>,
)

