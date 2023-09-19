import './IniciaSesion.css'

const IniciaSesion = () => {
  return (
    <div>
      <div className="message-error">
        <div className="inner-message">Datos incorrectos</div>
      </div>
      <div className="register">
        <h1>Inicia sesión</h1>
        <form className="form">
          <label htmlFor="email">Email</label>
          <input type="text" id="email" name="email" required />
          <br />

          <label htmlFor="confirm-password">Confirmar Contraseña:</label>
          <input
            type="password"
            id="confirm-password"
            name="confirmPassword"
            required
          />
          <br />

          <button type="submit" className="btn-register">
            Entrar
          </button>
        </form>
      </div>
    </div>
  );
};

export default IniciaSesion;
