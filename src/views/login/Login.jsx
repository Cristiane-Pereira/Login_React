import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Login.css";

const Login = (props) => {
  const [formValues, setFormValues] = useState({});

  const handleInputChange = (event) => {
    const { email, value } = event.target;
    setFormValues({ ...formValues, [email]: value });

    console.log("*** formValues", formValues);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);

    console.log("*** handleSubmit", data);
  };

  const handleClick = () => {
    let email = document.getElementById("email").value;
    let senha = document.getElementById("senha").value;

    let emailStorage = localStorage.getItem("email");
    let senhaStorage = localStorage.getItem("senha");

    if (email.value === emailStorage && senha.value === senhaStorage) {
      localStorage.setItem("usuario_logado", 1);
      alert("Login realizado com sucesso!");
    } else {
      alert("E-mail ou e senha inválido!");
    }
  }

  return (
    <>
      <main>
        <section className="login">
          <div className="card-form">
            <Form onSubmit={handleSubmit}>
              <h1>Entre ou cadastre-se</h1>
              <input
                id="email"
                type="email"
                name="email"
                placeholder="Digite o seu e-mail"
                onChange={handleInputChange}
                value={formValues.email}
                required
              />
              <input
                id="senha"
                type="password"
                name="senha"
                placeholder="Digite a sua senha"
                onChange={handleInputChange}
                value={formValues.senha}
                required
              />
              <Button type="submit" onClick={handleClick}>
                <b>Entrar</b>
              </Button>
              <Link to="/cadastro" className="link">
                Ainda não possui cadastro? Clique aqui.
              </Link>
            </Form>
          </div>
        </section>
        <section className="cadastro">
          <div className="image"></div>
        </section>
      </main>
    </>
  );
};

export default Login;
