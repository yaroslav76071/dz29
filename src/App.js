import './App.css';
import logo from './logo.svg';
import img from './img.jpg';

const li_1 = "текст ..."
const li_2 = "не текст"
const li_3 = "текст?"

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <div className="wrapper">
              <div className="block-left">
                <ul>
                  <li className="li-1">{li_1}</li>
                  <li className="li-2">{li_2}</li>
                  <li className="li-3">{li_3}</li>
                </ul>
              </div>

              <div className="block-right">
                <img src={img} className="img-1"/>
                <img src={img} className="img-2"/>
                <img src={img} className="img-3"/>
              </div>
              </div>
              
      </header>
    </div>
  );
}

export default App;