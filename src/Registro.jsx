import React from "react";

function Registro() {
  return (
    <div className="registro-container">
      <h2>Registro</h2>
      <form className="registro-form">
        <div className="form-group">
          <label htmlFor="nombre">Nombre</label>
          <input type="text" id="nombre" placeholder="Ingrese su nombre" />
        </div>

        <div className="form-group">
          <label htmlFor="apellido">Apellido</label>
          <input type="text" id="apellido" placeholder="Ingrese su apellido" />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" placeholder="Ingrese su email" />
        </div>

        <div className="form-group">
          <label htmlFor="telefono">Teléfono</label>
          <input type="tel" id="telefono" placeholder="Ingrese su teléfono" />
        </div>

        <div className="form-group">
          <label htmlFor="password">Contraseña</label>
          <input type="password" id="password" placeholder="Ingrese su contraseña" />
        </div>

        <div className="form-group">
          <label htmlFor="confirmar-password">Confirmar Contraseña</label>
          <input type="password" id="confirmar-password" placeholder="Confirme su contraseña" />
        </div>

        <button type="submit" className="btn-submit">Registrarse</button>
      </form>
    </div>
  );
}

export default Registro;
