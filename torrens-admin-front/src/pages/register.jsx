import React, { useState } from "react";
import { useHistory } from "react-router-dom";

export function Register(props) {
  let history = useHistory();
  const [input, setInput] = useState({
    username: "",
    password: "",
  });
  const [error, setError] = useState({});
  const handleInputChange = function (e) {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  const crearUsuario = (user, password) => {};

  const submitHandler = (e) => {
    e.preventDefault();
    const user = e.target.idUsername.value;
    const password = e.target.idPassword.value;
    console.log(user, password);
    crearUsuario(user, password);
    history.push("/home");
  };

  return (
    <div>
      <header className="App-header">
        <form className="formLogin" onSubmit={submitHandler}>
          <h3 className="mb-3">Registro</h3>
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
            value="Registrarse"
            className="btn btn-primary"
          />
        </form>
      </header>
    </div>
  );
}
