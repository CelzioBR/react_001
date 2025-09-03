import React from "react";

const Home = props => {
    return (
        <>
        <h2>Últimos Lançamentos</h2>
        <div className="card">
            <div className="thumb">
                <img src="imagens/capas/9788575228142.jpg" alt="" />
            </div>
            <div className="detalhes">
                <h3>Padrões para Kubernetes</h3>
                <p>O modo como os ...</p>
                <a href="#">Leia mais &gt;</a>
            </div>
        </div>
        <div className="card">
            <div className="thumb">
                <img src="imagens/capas/9788575228074.jpg" alt="" />
            </div>
            <div className="detalhes">
                <h3>Introdução ao Pentest - 2ª Edição</h3>
                <p>Introdução ao Pentest ...</p>
                <a href="#">Leia mais &gt;</a>
            </div>
        </div>
        </>
    )


    }
    
export default Home;


    // return (
    //     <>
    //     <h3> {props.tituloPagina} </h3>
    //     <p>
    //         ISBN: {props.isbn} <br />
    //         Titulo: {props.titulo} <br />
    //         Autor: {props.autor} <br />
    //     </p>
    //     </>
    // )