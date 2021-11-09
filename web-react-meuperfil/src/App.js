import React, { Component } from "react";
import "./App.css";
import "./Nicolas.css";

class App extends Component {
  render() {
    let img =
      "https://avatars.githubusercontent.com/u/69760986?v=4";

    return (
      <div>
        <center>
          <h1>App Meu Perfil</h1>
          <img src={img} width={250} height={250} />
          <h3 class="subtitles">Dados Pessoais:</h3>
          <p class="text">Nicolas Castanha Silva do Nascimento - 19 anos - Brasileiro</p>
          <h3 class="subtitles">Formação:</h3>
          <p class="text">Ciência da Computação - UNIP - 2020/Presente</p>
          <h3 class="subtitles">Experiência:</h3>
          <p class="text">Em busca de estágio.</p>
          <h3 class="subtitles">Projetos:</h3>
          <p class="text">
          Sistema de Criptografia e Descriptografia - Campo Minado - Mini Biblioteca - Lista de Tárefas - CRUD de Alunos
          </p>
        </center>
      </div>
    );
  }
}

export default App;
