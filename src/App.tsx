import emailjs from '@emailjs/browser';
import logo from './assets/icon.png'

function App() {

  const sendEmail = (e => {
    e.preventDefault();

    emailjs.sendForm('service_a469hhj', 'template_37gpwxx', e.target, 'n1EZEONgsHkGLpvdQ')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      alert("Cadastro enviado!\r\nA Trinity agradeçe ✔")
      e.target.reset();
});

  return (
    <div className="App">
      <img className='Logo' src={logo}></img>
      <h1>CADASTRO TRINITY</h1>
      <form onSubmit={sendEmail}>
        <ul className='Lista'>
          <li><p>Nome:</p> <input required type='text' name="user_name" /></li>
          <li><p>Telefone:</p> <input required type='tel' name="user_phone"/></li>
          <li><p>E-mail:</p> <input required type='email' name="user_email"/></li>
          <li><p>Profissão:</p> <input required type='text' name="user_occupation"/></li>
          <li><p>Nascimento:</p> <input required type='date' name="user_birth" /></li>
        </ul>
        <ul className='pct'>
              <p>Plano de Horas:</p>
              <li>
                <input required type="radio" id="mensal" name="user_plano" value="Mensal"/>
                <label htmlFor="mensal">Mensal</label>
              </li>
              <li>
                <input type="radio" id="pct_horas" name="user_plano" value="Pacote de Horas"/>
                <label htmlFor="pct_horas">Pacote de Horas</label>
              </li>
              <li>
                <input type="radio" id="horas_avulsas" name="user_plano" value="Horas Avulsas"/>
                <label htmlFor="horas_avulsas">Horas Avulsas</label><br />
              </li>
          </ul>
          <input className='submit' value="Enviar" type='submit'></input>
      </form>
    </div>
  )
}

export default App