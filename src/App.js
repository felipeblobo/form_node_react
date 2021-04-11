import './App.css';
import Form from './components/Form';
import Footer from './components/Footer';
import Header from './components/Header';

function App() {
  
  
  return (
    <div id='main'>
      <Header />
      <div id='relative'>
        <h1 className="mainTitle">Faça seu contato!</h1>
        <div className="container">
        <Form />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
