import React from "react";
import Axios from 'axios';
import { useState, useEffect } from "react";
import NavBar from './components/navbar';

function ListaProductos(){

    const [productos, setProducts] = useState([]);
    useEffect(
        () => {
            Axios.get('http://localhost:3001/api/productos')
                .then((response) => (setProducts(response.data)))
                .catch((error) => console.log(error));
        }, []
    );

    return(
        <div>
            <NavBar/>
            <h2>Listado de Productos</h2>
            <ul>
                {
                    productos.map((product) => {
                        return <li>{product.nombre_producto}</li>
                    })
                }
            </ul>
        </div>
    );
}

export default ListaProductos;