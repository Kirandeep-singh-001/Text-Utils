import './App.css';
import NavBar from './components/Navbar';
import Text from './components/Text';

function App(props) {
  return (
    <div className="App">
      <NavBar title="TextUtils"/>
      <div className='container my-3'>
         <Text heading="Enter the text for analyze"/>
      </div>
    </div>
  );
}

export default App;
