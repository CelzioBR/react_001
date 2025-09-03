import React from "react";
import Home from "./Home";

const Principal = () => {
    const isbn = "ISBN 978-85-7522-xxx-x";
    const titulo = "React";
    const autor = "Maujor";
    const titulopagina = "Últimos Lançamentos"
    
    return(
        <main className="principal">
            <Home 
                isbn = {isbn}
                titulo = {titulo}
                autor = {autor}
                tituloPagina = {titulopagina}
                />
        </main>

    );
}

export default Principal;