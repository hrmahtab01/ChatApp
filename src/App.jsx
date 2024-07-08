import React from 'react'
import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from 'react-router-dom'
import Signin from './Pages/Signin'

const App = () => {

 let router=createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Signin/>}>

    </Route>
  )
)

  return <RouterProvider router={router}/>
}

export default App
