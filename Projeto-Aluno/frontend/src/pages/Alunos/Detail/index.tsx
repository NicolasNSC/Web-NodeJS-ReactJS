import React, { useState, useEffect } from "react";
import { Button, Card, Nav } from "react-bootstrap";
import { useHistory, useParams } from "react-router-dom";
import api from "../../../services/api";
import moment from "moment";

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

const Detail: React.FC = () => {
  const history = useHistory();
  const { id } = useParams<{ id: string }>();
  const [aluno, setAluno] = useState<IAlunos>();

  function back() {
    history.goBack();
  }

  async function findAluno() {
    const response = await api.get<IAlunos>(`/aluno/${id}`);
    console.log(response);
    setAluno(response.data);
  }

  useEffect(() => {
    findAluno();
  }, [id]);

  return (
    <div className="container">
      <br />
      <div className="aluno-header">
        <h1>Detalhes do Aluno</h1>
        <Button variant="dark" size="sm" onClick={back}>
          Voltar
        </Button>
      </div>
      <br />

      <Card>
        <Card.Header>
          <Nav variant="tabs" defaultActiveKey="#first">
            <Nav.Item>
              <Nav.Link href="https://github.com/NicolasNSC" target="_blank">
                Github
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                href="https://www.linkedin.com/in/nicolascastanha"
                target="_blank"
              >
                Linkedin
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Card.Header>
        <Card.Body>
          <Card.Title>{aluno?.name}</Card.Title>

          <Card.Text>
            <strong>ID</strong> - {aluno?.id}
            <br />
            <strong>Idade </strong> - {aluno?.age}
            <br />
            <strong>Nascimento </strong> -{" "}
            {moment(aluno?.birth_date).format("DD/MM/YYYY")}
            <br />
            <strong>Endereço </strong> - {aluno?.address}
            <br />
            <br/>
            {aluno?.registration ? "Desmatriculado(a)" : "Matriculado(a)"}
            <br />
            <strong>Data de Cadastro: </strong>
            {moment(aluno?.created_at).format("DD/MM/YYYY")}
            <br/>
            <strong>Data de Atualização: </strong>
            {moment(aluno?.updated_at).format("DD/MM/YYYY")}
          </Card.Text>
        </Card.Body>
      </Card>

      <Card style={{ width: "18rem" }}></Card>
    </div>
  );
};
export default Detail;
