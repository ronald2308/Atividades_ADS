import './App.css';

import Apaixonado from "./img/apaixonado.png"
import Balao from "./img/balao.png"
import Castelo from "./img/castelo.png"
import Feliz from "./img/feliz.png"

function App() {
  
  const mostrar_nome_emoji_balao = () => {
    let p = document.getElementById("nome_emoji");
    p.textContent = "Balão";
  }

  const mostrar_nome_emoji_castelo = () => {
    let p = document.getElementById("nome_emoji");
    p.textContent = "Castelo";
  }

  const mostrar_nome_emoji_feliz = () => {
    let p = document.getElementById("nome_emoji");
    p.textContent = "Feliz";
  }

  return (
    <div className="App">
      <h1>Ola rapaziada</h1>
    
      <img src={Apaixonado} height="200px"/>
      <h4>Click nas imagens e tenha um resultado</h4>
      <img src={Balao} alt="asdas" height="50px" style={{marginRight:"40px"}} onClick={mostrar_nome_emoji_balao}/>
      <img src={Castelo} height="50px" onClick={mostrar_nome_emoji_castelo}/>
      <img src={Feliz} height="50px" style={{marginLeft:"40px"}} onClick={mostrar_nome_emoji_feliz}/>
      <p id="nome_emoji"></p>
    </div>
  );
}

export default App;