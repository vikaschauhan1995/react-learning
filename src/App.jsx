import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import LoginPage from './components/LoginPage'
import Sidebar from './components/Sidebar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import NestedRoute from './components/NestedRoute'
import RegisterPage from './components/RegisterPage'
import Home from './components/Home'
import Count from './components/Count'

function App() {
  const [count, setCount] = useState(0)
  const headerStyle= {
    color: '#f59542'
  }
  const headerStyle2= {
    backgroundColor: 'blue',
    headerStyle
  }
  const token = "aefjlsjflsjflaefjlsjflsjflaefjlsjflsjflaefjlsjflsjflaefjlsjflsjflaefjlsjflsjfl";
  // console.log("this=>", this);
  return (
    <>
    <BrowserRouter>
    <div style={{ display: 'flex', height: '100%'}}>
      <div style={{ width: 'auto', }}>
      <Sidebar />
      </div>
      <div style={{ flex: 1 }}>
      <Routes>
        <Route path="/" element={<div>Home</div>} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} /> 
        <Route path="/home" element={<Home />} />
        <Route path="/count" element={<Count />} />
        <Route path="*" element={<div>Page Not found</div>} />
      </Routes>
      </div>
      
    </div>
    <div style={{ position: 'relative',border: '1px solid red', width: '100%'}}>
      <div style={{ color: 'white', bottom: 0, position: ''}}>Footer</div>
    </div>
    </BrowserRouter>
    {/* <BrowserRouter>
      {
        token ?
        <>
      <Sidebar />
      <Routes>
        <Route path="/" element={<div>Home</div>} />
        <Route path="/home" element={<LoginPage />} />
        <Route path="*" element={<div>Page Not found</div>} />
      </Routes>
        </>
        :
        <>
      <Routes>
        <Route path="/" element={<div>Home</div>} />
        {/* <Route path="/login" element={<LoginPage />} />
        <Route path="*" element={<div>Page Not found</div>} />
      </Routes>
      </>
      } 
     
    </BrowserRouter>*/}
    </>
  )
}

class App1 {
  constructor(name){
    this.name = name;
  }
  
}
const myName = new App1("Vanshikha");
console.log("myName=>>", myName.name);

export default App
