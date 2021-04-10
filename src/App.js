import './App.css';
import Form from './components/Form';
import Footer from './components/Footer';

function App() {
  
  
  return (
    <div id='main'>
      <h1 className="mainTitle">Faça seu contato!</h1>
      <div className="container">
      <Form />
      </div>
      <Footer />
    </div>
  );
}

export default App;
