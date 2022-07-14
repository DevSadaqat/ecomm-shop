import './App.css';
import Header from './containers/Header';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import ProductListing from './containers/ProductListing';
import ProductDetails from './containers/ProductDetails';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ProductListing></ProductListing>}></Route>
          <Route path='/product/:productId' index element={<ProductDetails />} /> 
        </Routes>
  </BrowserRouter>
    </div>  
  );
}

export default App;
