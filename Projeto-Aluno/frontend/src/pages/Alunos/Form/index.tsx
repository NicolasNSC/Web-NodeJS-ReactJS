import React, { useState, ChangeEvent, useEffect } from "react";
import { Button, Form } from "react-bootstrap";
import api from "../../../services/api";
import "./index.css";
import { useHistory, useParams } from "react-router-dom";

interface IAlunos {
  name: string;
  ra: string;
  age: number;
  birth_date: Date;
  address: string;
}

const Alunos: React.FC = () => {
  const history = useHistory();
  const { id } = useParams<{ id: string }>();

  const [model, setModel] = useState<IAlunos>({
    name: "",
    ra: "",
    age: 0o0,
    birth_date: new Date(),
    address: "",
  });

  useEffect(() => {
    console.log(id);
    if (id !== undefined) {
      findAluno(id);
    }
  }, [id]);

  function updatedAluno(e: ChangeEvent<HTMLInputElement>) {
    setModel({
      ...model,
      [e.target.name]: e.target.value,
    });
  }

  async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault();

    if (id !== undefined) {
      const response = await api.put(`/aluno/${id}`, model);
    } else {
      const response = await api.post("/aluno", model);
    }
    back();
  }

  function back() {
    history.goBack();
  }

  async function findAluno(id: string) {
    const response = await api.get(`aluno/${id}`);
    console.log(response);
    setModel({
      name: response.data.name,
      ra: response.data.ra,
      age: response.data.age,
      birth_date: response.data.birth_date,
      address: response.data.address,
    });
  }

  return (
    <div className="container">
      <br />
      <div className="aluno-header">
        <h1>Novo Aluno</h1>
        <Button variant="dark" size="sm" onClick={back}>
          Voltar
        </Button>
      </div>
      <br />
      <div className="container">
        <Form onSubmit={onSubmit}>
          <Form.Group>
            <Form.Label>Nome</Form.Label>
            <Form.Control
              type="text"
              name="name"
              value={model.name}
              placeholder="Escreva seu nome"
              onChange={(e: ChangeEvent<HTMLInputElement>) => updatedAluno(e)}
            />
          </Form.Group>

          <br />

          <Form.Group>
            <Form.Label>RA</Form.Label>
            <Form.Control
              type="text"
              name="ra"
              value={model.ra}
              placeholder="Escreva seu RA"
              onChange={(e: ChangeEvent<HTMLInputElement>) => updatedAluno(e)}
            />
          </Form.Group>

          <br />

          <Form.Group>
            <Form.Label>Idade</Form.Label>
            <Form.Control
              type="number"
              name="age"
              value={model.age}
              placeholder="Digite sua idade"
              onChange={(e: ChangeEvent<HTMLInputElement>) => updatedAluno(e)}
            />
          </Form.Group>

          <br />

          <Form.Group>
            <Form.Label>Data de Nascimento</Form.Label>
            <Form.Control
              type="date"
              name="birth_date"
              value={model.birth_date}
              onChange={(e: ChangeEvent<HTMLInputElement>) => updatedAluno(e)}
            />
          </Form.Group>

          <br />

          <Form.Group className="mb-3" controlId="formGridAddress1">
            <Form.Label>Endereço</Form.Label>
            <Form.Control
              placeholder="Bairro, Cidade, CEP e Estado"
              type="text"
              name="address"
              value={model.address}
              onChange={(e: ChangeEvent<HTMLInputElement>) => updatedAluno(e)}
            />
          </Form.Group>

          <Button variant="dark" type="submit">
            Salvar
          </Button>
        </Form>
      </div>
    </div>
  );
};
export default Alunos;
