import './App.css';
import {Routes, Route} from "react-router-dom"
import Navbar from './components/Navbar';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';


function App() {
  return (
    <div className="App">

      <Navbar />

      <div className="twoColumns">
                
        <CountriesList />
          <Routes>
            <Route path='/:id' element={ <CountryDetails/> } />
          </Routes>
        <div></div>
      </div>
      
    </div>
  );
}

export default App;
