import React, { useState } from "react";

export default function SimpleForm() {
  const [state, setState] = useState({
    form: {},
  });

  const handleChange = (e) => {
    setState({
      form: {
        ...state.form,
        [e.target.name]: e.target.value,
      },
    });

    console.log(e.target.value);
  };

  return (
    <div className="container">
      <div className="row">
        <h1>Formulario</h1>
      </div>
      <div className="row">
        <form>
          <div className="form-group">
            <label>Nombre</label>
            <input
              type="text"
              className="form-control"
              name="nombre"
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              className="form-control"
              name="email"
              onChange={handleChange}
            />
          </div>
        </form>
      </div>
    </div>
  );
}
