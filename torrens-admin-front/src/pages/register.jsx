import axios from "axios";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";

export function Register(props) {
  let history = useHistory();
  const [input, setInput] = useState({
    name: "",
    username: "",
    password: "",
    isAdmin: false,
  });
  const [error, setError] = useState({});
  const handleInputChange = function (e) {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  const crearUsuario = async (user, password, name, lastname, isAdmin) => {
    const res = await axios
      .post("http://localhost:3001/api/user/register", {
        email: user,
        password: password,
        name: name,
        lastname: lastname,
        isAdmin: isAdmin,
      })
      .catch();
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const name = e.target.idName.value;
    const lastname = e.target.idLastame.value;
    const user = e.target.idUsername.value;
    const password = e.target.idPassword.value;
    var cbChecked = document.querySelector(
      '[name="inlineRadioOptions"]:checked'
    );
    let isAdmin;
    if (!cbChecked) {
      isAdmin = false;
    } else {
      isAdmin = true;
    }
    crearUsuario(user, password, name, lastname, isAdmin);
    //history.push("/inicio");
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
                  Nombre
                </label>
              </div>
              <div className="col-sm">
                <input
                  type="text"
                  className={`${error.name} form-control`}
                  name="name"
                  id="idName"
                  onChange={handleInputChange}
                  value={input.name}
                  aria-describedby="emailHelp"
                />
              </div>
            </div>

            <div className="row g-3 align-items-center">
              <div className="col-auto">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  Apellido
                </label>
              </div>
              <div className="col-sm">
                <input
                  type="text"
                  className={`${error.lastname} form-control`}
                  name="lastname"
                  id="idLastname"
                  onChange={handleInputChange}
                  value={input.lastname}
                  aria-describedby="emailHelp"
                />
              </div>
            </div>

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

            <div className="row g-3 align-items-center">
              <div className="col-auto">
                <div className="form-check form-switch">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    role="switch"
                    id="flexSwitchCheckDefault"
                    name="inlineRadioOptions"
                    value="True"
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexSwitchCheckDefault"
                  >
                    Admin User
                  </label>
                </div>
              </div>
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
