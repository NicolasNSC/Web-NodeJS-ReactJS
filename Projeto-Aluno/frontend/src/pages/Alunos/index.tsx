/* eslint-disable no-restricted-globals */
import React, { useEffect, useState } from "react";
import { Table, Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import api from "../../services/api";
import moment from "moment";
import "./index.css";

interface IAlunos {
  id: number;
  name: string;
  ra: string;
  age: number;
  birth_date: Date;
  address: string;
  registration: boolean;
  created_at: Date;
  updated_at: Date;
}

const Alunos: React.FC = () => {
  const [alunos, setAlunos] = useState<IAlunos[]>([]);
  const history = useHistory();

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

  function newAluno() {
    history.push("/aluno_cadastro");
  }

  function editAluno(id: number) {
    history.push(`/aluno_cadastro/${id}`);
  }

  function viewAlunos(id: number) {
    history.push(`/aluno/${id}`);
  }

  async function finishedMatricula(id: number) {
    await api.patch(`/matricula/${id}`);
    loadAlunos();
  }

  async function deleteAluno(id: number) {
    await api.delete(`/aluno/${id}`);
    loadAlunos();
  }

  return (
    <div className="container">
      <br />
      <div className="aluno-header">
        <h1>Alunos</h1>
        <Button variant="dark" size="sm" onClick={newAluno}>
          Novo Aluno
        </Button>
      </div>
      <br />
      <Table striped bordered hover variant="secondary">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nome</th>
            <th>RA</th>
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
              <td>{formatDate(alunos.birth_date)}</td>
              <td>{alunos.address}</td>
              <td>
                {alunos.registration
                  ? "Desmatriculado (a)"
                  : " Matriculado (a)"}
              </td>

              <td>
                <Button
                  size="sm"
                  variant="primary"
                  disabled={alunos.registration}
                  onClick={() => editAluno(alunos.id)}
                >
                  Editar
                </Button>{" "}
                <Button
                  size="sm"
                  variant="success"
                  disabled={alunos.registration}
                  onClick={() => finishedMatricula(alunos.id)}
                >
                  Desmatricular
                </Button>{" "}
                <Button
                  size="sm"
                  variant="warning"
                  onClick={() => viewAlunos(alunos.id)}
                >
                  Visualizar
                </Button>{" "}
                <Button size="sm" variant="danger"
                onClick={() => deleteAluno(alunos.id)}>
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
