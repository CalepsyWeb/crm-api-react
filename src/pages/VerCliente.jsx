import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Spinner from "../components/Spinner";

const VerCliente = () => {
  const [cliente, setCliente] = useState({});
  const [cargando, setCargando] = useState(true);
  const { id } = useParams();

  const { nombre, empresa, email, telefono, notas } = cliente;

  useEffect(() => {
    //setCargando(!cargando);
    const obtenerClienteAPI = async () => {
      try {
        const url = `http://localhost:4000/clientes/${id}`;
        const respuesta = await fetch(url);
        const resultado = await respuesta.json();
        setCliente(resultado);
      } catch (error) {
        console.log(error);
      }
      setCargando(!cargando);
    };

    obtenerClienteAPI();
  }, []);

  return (
     cargando ? <Spinner/> : Object.keys(cliente).length === 0 ? <p>No hay resultados </p> : (

      
    <div>
      
          <h1 className="font-black text-4xl text-blue-900">
            {" "}
            Cliente: {nombre}
          </h1>
          <p className="mt-3">Información del cliente</p>
          <p className="text-2xl text-gray-700 mt-10">
            <span className=" uppercase font-bold">Cliente: </span>
            {nombre}
          </p>
          <p className="text-1xl text-gray-700 mt-4">
            <span className=" uppercase font-bold">Empresa: </span>
            {empresa}
          </p>
          <p className="text-1xl text-gray-700 mt-4">
            <span className=" uppercase font-bold">Email: </span>
            {email}
          </p>
          {telefono && (
            <p className="text-1xl text-gray-700 mt-4">
              <span className=" uppercase font-bold">Teléfono: </span>
              {telefono}
            </p>
          )}

          {notas && (
            <p className="text-1xl text-gray-700 mt-4">
              <span className=" uppercase font-bold">Notas: </span>
              {notas}
            </p>
          )}
        
      
    </div>
    )
  )
  
};

export default VerCliente;
