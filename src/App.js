import React, { useState } from 'react';
import './App.css';
import Alert from './components/Alert';
// import About from './components/About';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
// import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert]= useState(null);

  const showAlert=(message, type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }
  const toggleMode=()=>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor='#042743';
      showAlert("Dark mode enabled","success");
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white';
      showAlert("Light mode enabled","success");
    }
  }
  return (
    <>
    {/* <Router> */}
    <Navbar title="TextEdit" mode={mode} toggleMode={toggleMode} />
    <Alert alert={alert}/>
    <div className ="container my-3">
    {/* <Routes>
        <Route exact path="/" element={<Textform showAlert={showAlert} heading ="Enter text to analyse here:" mode={mode}/>}/>
        <Route exact path="/about" element={<About/>}/>
    </Routes> */}
      <Textform showAlert={showAlert} heading ="Enter text to analyse here:" mode={mode}/>
    </div>
    {/* </Router> */}
    </>
  );
}

export default App;
