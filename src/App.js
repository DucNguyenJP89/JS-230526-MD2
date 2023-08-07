import './App.css';
// import Parent from "./components/Parent";
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
// import Login from './components/Login/Login';
import Register from './components/Register/Register';

function App() {
  return (
    <div className="App">
      <Header />
      {/* <Login /> */}
      <Register />
      <Footer />
    </div>
  );
}

export default App;
