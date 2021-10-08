import React from "react";
import { Link } from "react-router-dom";

const Home: React.FC = () => {
  return (
    <>
      <div className="container">
        <div className="jumbotron">
          <h1 className="display-4">Lista de Tarefas</h1>
          <p className="lead">
            Adicione suas tarefas, edite, finalize e exclua a hora que quiser!
          </p>
          <hr />
          <p>
            Esta aplicação consiste em um CRUD de uma lista de tarefas
            fornecidos por um back end construído com NodeJS e um front end
            construído em ReactJS.
          </p>
          <p>Desenvolvido por: <a href="https://github.com/NicolasNSC" target="_blank" rel="noopener noreferrer">Nicolas Castanha</a></p>
          <Link className="btn btn-primary btn-lg" to="/tarefas">
            Acessar Tarefas
          </Link>
        </div>
      </div>
    </>
  );
};

export default Home;
