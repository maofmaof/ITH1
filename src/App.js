import './style.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from './components/Form'
import Footer from './components/Footer'
import DisplayRecipes from './components/DisplayRecipes';

function App() {

  return (
    <div className="App">
      <div className="center-all-content">
        <h1>Some random food recipes & a form at the bottom app</h1>
       <DisplayRecipes/>
        <Form />
        <Footer greeting="hello"/>
      </div>
    </div>
  );
}

export default App;
