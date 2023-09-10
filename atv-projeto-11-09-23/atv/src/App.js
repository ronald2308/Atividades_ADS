import './App.css';
import facebook from "./img/facebook.svg"

function App() {
  return (

    <div className="App">
     
     <header>

      <img src={facebook} alt="logo do facebook"/>
     
     </header>
    
    <function>
      
      <form>
            <p>Entrar no Facebook</p>
           <input type="text" class="login" placeholder="E-mail ou telefone"/>
           <input type="password" class="senha" placeholder="Senha"/>
           <input type="text" class="entrar" placeholder="Entrar"/>
           <a href="a">Esqueceu a conta?</a>
           <button class="criar-conta">Criar nova conta</button>
     </form>

     </function>

     
  
     </div>
  );
}

export default App;