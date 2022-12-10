import './App.css';
import NavBar from './components/navBar';
import Footer from './components/footer';
import Catalog from './pages/catalog';



function App() {
  return (
    <div className="App">
      <NavBar />

      <div className='page-content'>
        <Catalog />
      </div>

      <Footer></Footer>
    </div>
  );
}

export default App;

// npm start