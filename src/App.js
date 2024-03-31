import Navbar from './components/Navbar/Navbar'
import { Outlet } from 'react-router-dom'


function App() {
  
  return (
    
      <div className='flex'>
        <div className='basis-1/4'>
      <Navbar/>
      </div>
      <div className='basis-3/4 overflow-y-scroll'>
      <Outlet/>
      </div>
      </div>
     
  )
}

export default App
