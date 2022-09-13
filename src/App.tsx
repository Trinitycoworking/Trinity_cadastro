import emailjs from '@emailjs/browser';

function App() {

  const sendEmail = (e => {
    e.preventDefault();

    emailjs.sendForm('service_a469hhj', 'template_37gpwxx', e.target, 'n1EZEONgsHkGLpvdQ')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
});

  return (
    <div className="App">
      <form onSubmit={sendEmail}>
      <h1>CADASTRO TRINITY</h1>
        <ul className='Lista'>
          <li><p>Nome:</p> <input type='text' name="user_name" /></li>
          <li><p>Telefone:</p> <input type='tel' name="user_phone"/></li>
          <li><p>E-mail:</p> <input type='email' name="user_email"/></li>
          <li><p>Profissão:</p> <input type='text' name="user_occupation"/></li>
          <li><p>Nascimento:</p> <input type='date' name="user_birth" /></li>
          </ul>
          <p>Plano de Horas:</p>
          <div className='pct'>
              <input type="radio" id="mensal" name="user_plano" value="mensal"/>
              <p for="mensal">MENSAL</p>
              <input type="radio" id="pct_horas" name="user_plano" value="pct_horas"/>
              <p for="pct_horas">PCT DE HORAS</p>
              <input type="radio" id="horas_avulsas" name="user_plano" value="horas_avulsas"/>
              <p for="horas_avulsas">HORAS AVULSAS</p><br />
          </div>
          <input className='submit' value="Send" type='submit'></input>
      </form>
    </div>
  )
}

export default App