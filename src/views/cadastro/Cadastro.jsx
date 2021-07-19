import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Cadastro.css";

const Cadastro = (props) => {
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

  function validaCadastro() {
    let email = document.getElementById("email");
    let senha = document.getElementById("senha");
    let confirmarSenha = document.getElementById("confirmarSenha");

    if (
      email.value.length > 5 &&
      senha.value > 3 &&
      senha.value === confirmarSenha.value
    ) {
      alert("Cadastro efetuado com sucesso.");
      return true;
    } else if (senha.value !== confirmarSenha.value) {
      alert(
        "As senhas não correspondem, digite senhas iguais para realizar o cadastro."
      );
    } else if (email.value.length <= 5) {
      alert("Digite um e-mail válido para realizar o cadastro.");
    } else {
      alert("Preencha todos os campos para realizar o cadastro.");
    }

    return false;
  }

  const handleClick = () => {
    let email = document.getElementById("email").value;
    let senha = document.getElementById("senha").value;

    if (validaCadastro() === true) {
      localStorage.setItem("email", email.value);
      localStorage.setItem("senha", senha.value);
    }
  }

  return (
    <>
      <main>
        <div className="card">
          <Form onSubmit={handleSubmit}>
            <h1>Cadastre-se</h1>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="Digite um e-mail"
              onChange={handleInputChange}
              value={formValues.email}
              required
            />
            <input
              id="senha"
              name="senha"
              type="password"
              placeholder="Digite uma senha"
              onChange={handleInputChange}
              value={formValues.senha}
              required
            />
            <input
              id="confirmarSenha"
              name="confirmarSenha"
              type="password"
              placeholder="Confirme a sua senha"
              onChange={handleInputChange}
              value={formValues.confirmarSenha}
              required
            />
            <Button type="submit" onClick={handleClick}>
              <b>Cadastre-se</b>
            </Button>
            <br />
            <Link to="/" className="link">
              Já possui cadastro? Realize o login.
            </Link>
          </Form>
        </div>
      </main>
    </>
  );
};

export default Cadastro;
