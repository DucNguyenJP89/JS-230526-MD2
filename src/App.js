import logo from './logo.svg';
import './App.css';
import ParentComponent from './components/ParentComponent';

function App() {
  return (
    <div className="App">
      <img src={logo} alt="logo" />
      <ParentComponent />
    </div>
  );
}

export default App;
