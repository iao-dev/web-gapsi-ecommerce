import './App.css';
import Header from './frontend/components/Header';
import Footer from './frontend/components/Footer';
import Welcome from './frontend/components/Welcome';
import ListSuppliers from './frontend/components/ListSuppliers';
//import SignIn from './frontend/components/SignIn';


function App() {
  return (
    //Patrones de diseño creacionales
    //Abstrac factory
    //Patrones estructurales aqui utlice react y material 

    <div className="App">
      <Header title="e-Commerce Gapsi"  />
      <Welcome />
     <ListSuppliers />
      <Footer note="Gapsy © " />
    </div>
  );
}

export default App;
