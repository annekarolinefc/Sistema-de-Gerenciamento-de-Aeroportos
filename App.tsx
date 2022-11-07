import * as React from 'react';
import './style.css';

export default function App() {
  return (
    <div>
      <h1>Sistema de Gerenciamento de Aeroportos</h1>
      <button className="button-add">Adicionar</button>

      <section>
        <table>
          <thead>
            <th>ID</th>
            <th>Nome do Aeroporto</th>
            <th>Nome Completo</th>
            <th>IATA</th>
            <th>Cidade</th>
            <th>Codigo do País</th>
            <th>Latitude</th>
            <th>Longitude</th>
            <th>Altitude</th>
          </thead>
          <tbody>
            <tr *ngFor="let repositorio of repositorios;>
              <td>{{ repositorio.id_aeroporto }}</td>
              <td>{{ repositorio.nome_aeroporto }}</td>
              <td>{{ repositorio.codigo_iata }}</td>
              <td>{{ repositorio.cidade }}</td>
              <td>{{ repositorio.codigo_pais_iso }}</td>
              <td>{{ repositorio.latitude }}</td>
              <td>{{ repositorio.longitude }}</td>
              <td>{{ repositorio.altitude }}</td>
            </tr>
          </tbody>
        </table>
      </section>

    </div>
   
  );
}
