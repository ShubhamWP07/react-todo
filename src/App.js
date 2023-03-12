
import './App.css';
import Footer from "./Footer"
import Header from "./Header"
import { Outlet } from "react-router-dom";
// import "https://kit.fontawesome.com/cc22289122.js"

function App() {
  return (
    <>
      <Header/>

      <Outlet/>

      <Footer/>
    </>
  )
}

export default App;
