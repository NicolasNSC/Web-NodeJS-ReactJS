import React from "react";
import { Link } from "react-router-dom";
import "./index.css";

const Home: React.FC = () => {
  return (
    <>
      <div className="container">
        <div className="jumbotron">
          <h1 className="display-4">Gerenciador de Alunos</h1>
          <p className="lead">
            Matricule, edite, atualize e romova seus alunos quando quiser!
          </p>
          <hr />
          <p>
            Esta aplicação consiste em um CRUD de um sistema de gerenciamento de alunos
            fornecido por um back end construído com NodeJS e um front end
            construído em ReactJS.
          </p>
          <p>Desenvolvido por: <a href="https://github.com/NicolasNSC" target="_blank" rel="noopener noreferrer">Nicolas Castanha</a></p>
          <Link className="btn btn-primary btn-lg" to="/alunos">
            Acessar Alunos
          </Link>
        </div>
      </div>
    </>
  );
};

export default Home;
