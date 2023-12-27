import React from 'react'
import ReactDOM from 'react-dom/client' 
import './index.css'
import  {RouterProvider,createBrowserRouter,createRoutesFromElements, Route} from "react-router-dom"
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Layout from './components/Layout';
import User from './components/User';
import Github, { loaderInfo } from './components/Github';

// const router =  createBrowserRouter([
//   {
//     path:'/',
//     element:<Route/>,
//     children:[
//       {
//         path:"",
//         element:<Home />
//       },
//       {
//         path: "/about",
//         element:<About />
//       },
//       {
//         path:"/contact",
//         element:<Contact  />
//       }
//     ]
//   }
// ]);

const router  = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route path='' element={<Home/>}/>
      <Route path='about' element={<About/>}/>
      <Route path='contact' element={<Contact/>}/>
      <Route path='user/:userid' element={<User/>}/>
      <Route 
      path='github' 
      element={<Github/>}
      loader={loaderInfo}
      />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider  router={router}/>
  </React.StrictMode>,
)
