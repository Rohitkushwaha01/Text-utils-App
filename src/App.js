import React, {useState} from "react";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";

function App() {
  const [mode, setmode] = useState('light');

  const toggleMode = ()=>{
    if(mode === 'light'){
      setmode('dark');
      document.body.style.backgroundColor = "#343a40";
      document.body.style.color = "white";
    }
    else{
      setmode('light');
      document.body.style.backgroundColor = "white";
      document.body.style.color = "#343a40";
    }
  }

  return (
    <div>
      <Navbar title="TextUtils" mode={mode} toggle={toggleMode}></Navbar>
      <TextForm heading="Enter your Text to Analyze below"></TextForm>
    </div>
  );
}

export default App;
