import React, {Component} from "react";

import Topo from "./components/Topo";
import Principal from "./components/Principal";
import Rodape from "./components/Rodape";

// class App extends Component {
//   state = {
//     isbn: "978-85-7522-xxx-x",
//     titulo: "React",
//     autor: "Maujor"
//   };

  // componentDidMount()
  // {
  //   this.setState({autor: "Mauricio"})
  // };


  // render() {
  //   return (
  //     <p>
  //       ISBN: {this.state.isbn}
  //       <br />
  //       Título: {this.state.titulo}
  //       <br />
  //       Autor: {this.state.autor}
  //       <br />
  //     </p>
  //   );
  // }
//}

const App = () => {
  return (
    <>
    <Topo />
    <Principal />
    <Rodape />
    </>
  );
};

export default App;

// import logo from './logo.svg';
// import './App.css';
// import React from 'react';


// function App() {
//   return (
//     <>
//       <header className='topo'>
//       <h1 className="logo"></h1>
//       <ul>
//         <li><a href=''>Navegação</a></li>
//         </ul>
//         </header>
//       <main className='principal'>
//         <h2>Últimos Lançamentos</h2>
//         <div className='card'>Card</div>
//         </main>
//       <footer className='rodape'><p>Editora MaujorTec - 2025 </p></footer>
//     </>
//   );
// }

// export default App;
