import React from 'react'
import { BrowserRouter , Routes ,Route} from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Product from './components/Product'
import Navbar from './components/Navbar'
import Footer from './components/Footer'


const App = () => {
  return (
    <div>
       <BrowserRouter>
       <Navbar/>
       <Routes>
     
        
        <Route path='/home' element={<Home/>}/>
        <Route path='/product' element={<Product/>}/>
        <Route path='/about' element={<About/>}/>
      
        
       </Routes>
        <Footer/>
       
       </BrowserRouter>
      
       
    </div>
  )
}

export default App