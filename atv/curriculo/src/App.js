import './App.css';
import jerry from './img/jerry.jpg'

function App() {

  
  return (
    
    <div className="App">

      <img src={jerry} alt="rato" class="img"/>
      <h2>Jerry Ratito da Silva</h2>
        
        <div className="cont">
          <h4>Telefone: (81) 99744-1361</h4>
         <h4>E-mail: jerry@gmail.com</h4>
        </div>
        
        <div className="info">
          <h3>Obetivo</h3>
            <p>
              <ul>
                <li>
                 Ter um conhecimento enorme na área da tecnologia, e se sair muito bem na hora do aprendizado. Para futuramente eu ser um excelente profissional, e poder trabalhar de Home Office e não ter que pegar transporte público.
               </li>
              </ul>
            </p>
          <h3>Formação</h3>
        </div>

        <div className="form">
          <p>
            <ul>
              <li>ETE Ginásio Pernambucano</li>
            </ul>
            <ul>
              <li>Início: 02/17</li>
            </ul>
            <ul>
              <li>Conclusão: 12/19</li>
            </ul>
          </p>
        </div>

        <div className="form2">
          <p>
            <ul>
              <li>UNINASSAU</li>
            </ul>
            <ul>
              <li>
                Curso: Análise e Desenvolvimento de Sistemas
              </li>
            </ul>
            <ul>
              <li>Início: 08/23</li>
            </ul>
            <ul>
              <li>Conclusão: ________</li>
            </ul>
          </p>
        </div>
    
    </div>


  );
}

export default App;
