import React from 'react';
import {createRoot} from 'react-dom/client';
import './style.css';

class App extends React.Component {
  constructor(props){super(props);this.state={numero:'',sorteado:null,mensagem:'Tente Adivinhar',tentativas:0};}
  iniciar=()=>this.setState({sorteado:Math.floor(Math.random()*100),numero:'',mensagem:'Digite um número de 0 a 99',tentativas:0});
  tentar=()=>{const n=Number(this.state.numero);if(this.state.sorteado===null){this.setState({mensagem:'Clique em "Clique Aqui" para começar.'});return;}if(!Number.isInteger(n)||n<0||n>99){this.setState({mensagem:'Digite um número inteiro entre 0 e 99.'});return;}const t=this.state.tentativas+1;let m='';if(n===this.state.sorteado)m=`Acertou! O número era ${n}. Tentativas: ${t}`;else if(n<this.state.sorteado)m='Tente um número maior!';else m='Tente um número menor!';this.setState({mensagem:m,tentativas:t});};
  render(){return <div className="box"><input type="number" min="0" max="99" value={this.state.numero} onChange={e=>this.setState({numero:e.target.value})}/><button onClick={this.iniciar}>Clique Aqui</button><h1>{this.state.mensagem}</h1><button onClick={this.tentar}>Tentar</button></div>}
}
createRoot(document.getElementById('root')).render(<App/>);
