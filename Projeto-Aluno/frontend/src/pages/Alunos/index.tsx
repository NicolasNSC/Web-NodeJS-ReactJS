import React, { useEffect, useState } from "react";
import { Table, Button } from "react-bootstrap";
import api from "../../services/api";
import moment from "moment";

interface IAlunos {
  id: number;
  name: string;
  ra: string;
  birth_date: Date;
  address: string;
  registration: boolean;
  age: number;
  created_at: Date;
  updated_at: Date;
}

const Alunos: React.FC = () => {
  const [alunos, setAlunos] = useState<IAlunos[]>([]);

  useEffect(() => {
    loadAlunos();
  }, []);

  async function loadAlunos() {
    const response = await api.get("/alunos");
    console.log(response);
    setAlunos(response.data);
  }

  function formatDate(date: Date) {
    return moment(date).format("DD/MM/YYYY");
  }

  return (
    <div className="container">
      <br />
      <h1>Página de Alunos</h1>
      <br />
      <Table striped bordered hover variant="secondary">
        <thead>
          <tr>
            <th>#</th>
            <th>Nome</th>
            <th>RA</th>
            <th>Idade</th>
            <th>Nascimento</th>
            <th>Endereço</th>
            <th>Registro</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {alunos.map((alunos) => (
            <tr key={alunos.id}>
              <td>{alunos.id}</td>
              <td>{alunos.name}</td>
              <td>{alunos.ra}</td>
              <td>{alunos.age}</td>
              <td>{formatDate(alunos.birth_date)}</td>
              <td>{alunos.address}</td>
              <td>{alunos.registration ? "Matriculado" : "Pendente"}</td>

              <td>
                <Button size="sm" variant="primary">
                  Editar
                </Button>{" "}
                <Button size="sm" variant="success">
                  Finalizar
                </Button>{" "}
                <Button size="sm" variant="warning">
                  Visualizar
                </Button>{" "}
                <Button size="sm" variant="danger">
                  Remover
                </Button>{" "}
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default Alunos;
