import "./Login.css";

const Login = () => {
  return (
    <div className="register">
      <h1>Registrate</h1>
      <form className="form">
        <label htmlFor="nickname">Nickname:</label>
        <input type="text" id="nickname" name="nickname" required />
        <br />

        <label htmlFor="email">Email:</label>
        <input type="text" id="email" name="email" required />
        <br />

        <label htmlFor="edad">Edad:</label>
        <input type="number" id="edad" name="edad" required />
        <br />

        <label htmlFor="password">Contraseña:</label>
        <input type="password" id="password" name="password" required />
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
          Registrarse
        </button>
      </form>
    </div>
  );
};

export default Login;
