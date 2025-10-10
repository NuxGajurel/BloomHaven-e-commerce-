import React from 'react'
import { BrowserRouter , Routes ,Route} from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Product from './components/Product'
import Navbar from './components/Navbar'
import AddToCard from './components/AddToCard'

const App = () => {
  return (
    <div>
       <BrowserRouter>
       <Navbar/>
       <Routes>
     
        <Route path='/' element=""/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/product' element={<Product/>}/>
        <Route path='/about' element={<About/>}/>
       <Route path='/addto' element={<AddToCard/>}/>
        
        
       </Routes>
       
       
       </BrowserRouter>
       
    </div>
  )
}

export default App