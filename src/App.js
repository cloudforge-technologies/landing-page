import './App.css';
import Navbar from './Navbar.js';
import './icon.png';

function App() {
  return (
    <div className="App" style={{display: 'flex', justifyContent:'center', alignItems:'center', textAling: 'center', flexDirection:'column'}}>
      <img alt='logo' src='icon.png'/>
      <p style={{color:'#FFFFFF', fontSize:'32px', display:'block', fontFamily:'IBM Plex Sans'}}>&#128679;Working in progress...&#128679;</p>
    </div>
  );
}
export default App;
