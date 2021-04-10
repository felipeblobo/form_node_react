import '../App.css';
import { useState } from 'react';
import axios from 'axios';

function Form() {

  const [campos, setCampos] = useState({
    nome: '',
    email: '',
    telefone: '',
    mensagem: '',
    anexo: '',
  });
  
  function handleInputChange(event) {
    if (event.target.name === 'anexo') {
      campos[event.target.name] = event.target.files[0];
    }
    campos[event.target.name] = event.target.value;
    setCampos(campos);
  }

  function handleFormSubmit(event) {
    event.preventDefault();
    send();
  }

  function send() {
    const formData = new FormData();
    Object.keys(campos).forEach(key => formData.append(key, campos[key]));
    axios.post('/send', formData, {
        headers: {
          'Content-type':`multipart/form-data; boundary=${formData._boundary}`
        }
    }).then(response => alert(JSON.stringify(response.data)));
  }

  return (
    <form onSubmit={handleFormSubmit}>
      <label htmlFor="nome">Nome</label>
      <input name="nome" type="text" id="nome" onChange={handleInputChange}/>
      <label htmlFor="email">Email</label>
      <input
        name="email"
        type="text"
        id="email"
        placeholder="Digite seu melhor email."
        onChange={handleInputChange}
      />
      <label htmlFor="telefone">Telefone</label>
      <input
        name="telefone"
        type="text"
        id="telefone"
        placeholder="DDD999999999"
        onChange={handleInputChange}
      />
      <label htmlFor="mensagem">Mensagem</label>
      <textarea name="mensagem" id="mensagem" placeholder="Deixe sua mensagem aqui." onChange={handleInputChange} />
      <label htmlFor="anexo">Anexo</label>
      <input id="anexo" type="file" name="anexo" onChange={handleInputChange} />
      <input type="submit" />
    </form>
  )
}

export default Form
