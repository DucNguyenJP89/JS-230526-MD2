import './App.css';
import CoinFlip from './components/CoinFlip/CoinFlip';
// import Parent from "./components/Parent";
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
// import Login from './components/Login/Login';
// import Register from './components/Register/Register';

function App() {
  return (
    <div className="App">
      <Header />
      {/* <Login /> */}
      {/* <Register /> */}
      <CoinFlip />
      <Footer />
    </div>
  );
}

export default App;
