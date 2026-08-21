import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import React, { useState, useContext } from "react";
// import A from "./component1/A.jsx";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import Navbar from "./pages/Navbar.jsx";


// const ThemesContext = React.createContext();
function App() {
  // const [theme, setTheme] = useState("Hello, Bhai!");
    
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact/>} />
      </Routes>
    </BrowserRouter>

    <Navbar/>
      {/* <ThemesContext.Provider value={theme}>
        <A />
      </ThemesContext.Provider> */}

    </>
  );
}

// function Home() {
//   return <h1>Hello, World!</h1>;
// }
// function About() {
//   return <h1>About Page</h1>;
// }

export default App;
// export { ThemesContext };

//  <h2>{a+3}</h2>
//       <h2>{a}</h2>
//       <h1 className='main'>Hello, World!</h1>

//       <button onClick={()=>b(a+1)}>Click Me!</button>
// ----------------------------------
// import React from 'react'
// import reactLogo from "./assets/react.svg"
// import { useState , useContext, createContext } from "react";
// import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
// import Test from "./Test.jsx"
// import Test1 from "./Test1.jsx"
// import PropsBasic from "./PropsBasic";
// import { ButtonBasic } from "./component/ButtonBasic";
// import ButtonBasic from "./component/ButtonBasic.jsx";
// import Counter from "./component/Counter.jsx";
// import Counter2 from "./component/Counter2.jsx";
// import Toggle from "./component/Toggle.jsx";
// import InputExample from "./component/InputExample.jsx";
// import SimpleForm from "./component/SimpleForm.jsx";
// import MultiForm from "./component/MultiForm.jsx";
// import BasicValidationForm from "./component/BasicValidationForm.jsx";
// import LogOut from "./component/LogOut.jsx";
// import Login from "./component/Login.jsx";
// import UseStateBasic from "./component/UseStateBasic.jsx";
// import LonggerComponent from "./component/LonggerComponent.jsx";
// import TimeCounter from "./component/TimeCounter.jsx";
// import A from "./component1/A.jsx";

// function App() {
// let [a,b] = useState(100);
// function Home() {
//   alert("Warning!");
// }
// ---------Momentus question-----------important----------------
// const Istrue = false
// if(Istrue){
//   return<Test1/>
// }else{
//   return <Test/>
// }
// ------------------------------------
// const hobies = ["Reading","Minded Chess","Cricket"]
// -------------------------------------------
// function buttonfun(){
//   alert("Are you sure to submit this form!")
// }
// const [a,b] = useState(true);

// return 
{/* {a ? <LogOut/> : <Login/>} */ }
{/* <h1>May I help you?</h1> */ }
{/* <Test /> */ }
{/* <Test1 /> */ }
{/* <PropsBasic name="Harry Bhai" field="Cloud Developer" age="25" hobies={hobies} /> */ }
{/* <ButtonBasic lable="Click Me!" handleButton={buttonfun} /> */ }
{/* <Counter/> */ }
{/* <Counter2/> */ }
{/* <Toggle/> */ }
{/* <InputExample/> */ }
{/* <SimpleForm /> */ }
{/* <MultiForm /> */ }
{/* <BasicValidationForm /> */ }
{/* <UseStateBasic /> */ }
{/* <LonggerComponent /> */ }
{/* <TimeCounter /> */ }

// export default App;
