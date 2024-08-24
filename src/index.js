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

//for reading path name
//const currentPath=window.location.pathname;

// if(currentPath=="/"){
//   root.render(<Home/>)
// }
// else if(currentPath=="/about"){
//     root.render(<About/>)
// }
// else if(currentPath=="/App"){
//     root.render(<App/>)
// }
// else{
//     root.render(<h1>404 Not Found</h1>)
// }



// root.render(<div>
//     {/* render pathname */}
//     <h1>Pathanme:{currentPath}</h1> 
    
// </div>);



