import './App.css'
import AboutReact from './components/AboutReact/AboutReact';
import Products from "./components/Products/Products";

function App() {
  return (
    <div className="App">
      <div className="header">
        <h2>Bat Store</h2>
        <p> pick 4 Bat</p>
      </div>
      <Products />
      <AboutReact/>
      
    </div>
  );
}

export default App;
