import { Link } from "react-router-dom";
import "./Details.css";
import UserPos from "../user-post/UserPos";
import Error from "../login/Error";

const Details = () => {
  return (
    <div>
      <Error />
      <header className="header-details">
        <Link to="/" className="back-detail">
          Atras
        </Link>
        <h1>Detalles</h1>
      </header>

      <main className="main-details">
        <div className="co-main-detail">
          <UserPos
            imageProfile="https://media-cldnry.s-nbcnews.com/image/upload/t_fit-1500w,f_auto,q_auto:best/newscms/2019_38/3015691/190918-plenty-of-fish-dog-filter-se-227p.jpg"
            nameUser="Conejita__2001"
            textBody="Hola, ¿saben donde puedo conseguir boletos de avion baratos?"
            linkDetail="/details"
          />
        </div>
      </main>

      <div className="seccion-comment">
        <span className="sub">Comentarios</span>

        <div className="box-comments">
          <UserPos
            nameUser="@Carlos"
            textBody="Creo que en Colmobia Air, puedes averiguar"
          />
        </div>
      </div>

      <form action="" className="form-detail">
        <input type="text" placeholder="Escribe un comentario" />
        <button>Enviar</button>
      </form>
    </div>
  );
};

export default Details;
