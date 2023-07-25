import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import NavSidebar from './Components/NavSidebar'
import Image_Library from './Components/Image_Library'
import FullInfo from './Components/FullInfo'
import { ObjProvider } from './Components/ObjContext'
import Home from './Components/Home'
import ApD from './Components/ApD'
function App() {

  return (
    <>
      <ObjProvider>
        <BrowserRouter >
        <NavSidebar />
          <Routes>
              <Route exact path='/' element={<Home />}></Route>
              <Route exact path='/img' element={<Image_Library />}></Route>
              <Route exact path='/img/details' element={<FullInfo />}></Route>
              <Route exact path='/aPod' element={<ApD />}></Route>
        
          </Routes>
        </BrowserRouter>
        <ToastContainer />
      </ObjProvider>
    </>
  )
}

export default App
