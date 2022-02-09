import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";

function Login(props) {
  let history = useHistory();
  const [input, setInput] = useState({
    username: "",
    password: "",
  });
  const [error, setError] = useState({});
  const handleInputChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };
  const iniciarSesion = async (user, password) => {
    const res = await axios
      .post("http://localhost:3001/api/user/login", {
        email: user,
        password: password,
      })
      .then((obj) => console.log(obj.data.data.token));
  };
  const submitHandler = (e) => {
    e.preventDefault();
    const user = e.target.idUsername.value;
    const password = e.target.idPassword.value;
    iniciarSesion(user, password);
    //history.push("/inicio");
  };

  return (
    <div>
      <header className="App-header">
        <div>
          <form className="formLogin" onSubmit={submitHandler}>
            <h3>Iniciar Sesión</h3>
            <div className="container mb-3">
              <div className="row g-3 align-items-center">
                <div className="col-auto">
                  <label htmlFor="exampleInputEmail1" className="form-label">
                    Email
                  </label>
                </div>
                <div className="col-sm">
                  <input
                    type="text"
                    className={`${error.username} form-control`}
                    name="username"
                    id="idUsername"
                    onChange={handleInputChange}
                    value={input.username}
                    aria-describedby="emailHelp"
                  />
                </div>
              </div>
              <div id="emailHelp" className="form-text">
                {error.username && <h6>{error.username}</h6>}
              </div>
            </div>
            <div className="container mb-3">
              <div className="row g-3 align-items-center">
                <div className="col-auto">
                  <label htmlFor="exampleInputPassword1" className="form-label">
                    Password
                  </label>
                </div>
                <div className="col-sm">
                  <input
                    type="password"
                    className={`${error.password} form-control`}
                    name="password"
                    id="idPassword"
                    onChange={handleInputChange}
                    value={input.password}
                  />
                </div>
              </div>
              <div id="passwordHelpInline" className="form-text">
                {error.password && <h6>{error.password}</h6>}
              </div>
            </div>
            <input
              type="submit"
              value="Ingresar"
              className="btn btn-primary mb-3"
            />
            <div>
              <Link to="/register" style={{ color: "#FFF" }}>
                <h6>"¿No tienes Cuenta? ¡Registrate!"</h6>
              </Link>
            </div>
          </form>
        </div>
      </header>
    </div>
  );
}

export default Login;
