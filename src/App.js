import { useState } from 'react';
import './App.css';
//import About from './components/About';
import NavBar from './components/Navbar';
import Text from './components/Text';

function App(props) {
  const [mode, setMode] = useState('light');
  const[btnText, setBtnText]= useState('Enable Dark Mode');

 const toggleMode = ()=>{
  if(mode === "light"){
    setMode('dark');
    setBtnText('Enable Light Mode');
  }else{
    setMode('light')
    setBtnText('Enable Dark Mode')
  }
 }

  return (
    <div className="App">
      <NavBar title="TextUtils" mode={mode} toggleMode={toggleMode} buttonText = {btnText}/>
      {/* <About /> */}
      <div className='container my-3'>
         <Text heading="Enter the text for analyze"/>
      </div>
    </div>
  );
}

export default App;
