import React, {useState} from "react";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Footer from "./components/Footer";

function App() {
  const [mode, setmode] = useState('dark');
  
  const toggleMode = ()=>{
    if(mode === 'light'){
      setmode('dark');
      document.body.style.backgroundColor = "#343a40";
      document.body.style.color = "white";
    }
    else{
      setmode('light');
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
    }
  }

  return (
    <div>
      <Navbar title="TextUtils" mode={mode} toggle={toggleMode}></Navbar>
      <TextForm heading="Enter your Text to Analyze below"></TextForm>
      <Footer></Footer>
    </div>
  );
}

export default App;
