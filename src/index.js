import ReactDOM from 'react-dom/client';
import "./index.css"

import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import App from "./views/app/App"
import Home from "./views/home/home"
import About from "./views/about/about"

const root=ReactDOM.createRoot(document.getElementById('root'));

const router=createBrowserRouter([
    {
        path:'/',
        element:<Home/>,
    },
    {
        path:'/about',
        element:<About/>,
    },
    {
        path:'/app',
        element:<App/>,

    }
])

root.render(<RouterProvider router={router}/>)


