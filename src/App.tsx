import React, { useEffect, useState } from 'react';
import './App.css';
import { readData } from './api-client';
import { Agenda } from './angenda.model';
//import Button from '@mui/material/Button';


const App = () => {
  const [agendaList, setAgendaList] = useState<Agenda[]>([]);

  const loadData = async () => {
    const data = await readData();
    setAgendaList(data);
  }

  useEffect(() => {
    loadData();
  }, []);

  return (
    <div className="App">

  {/*<Button className="btnAgregar">Agregar</Button>*/}

      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Nombre</th>
            <th>Apellido</th>
            <th>Teléfono</th>
          </tr>
        </thead>
        <tbody>
          {
            agendaList.map((row, index) => {
              return (<tr>
                <td className='fw-bold'>{index + 1}</td>
                <td>{row.nombre}</td>
                <td>{row.apellido}</td>
                <td>{row.telefono}</td>
              </tr>)
            })
          }
        </tbody>
      </table>
    </div>
  );
}


export default App;
