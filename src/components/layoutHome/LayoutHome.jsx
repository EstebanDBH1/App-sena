import { Link } from "react-router-dom";
import UserPos from "../user-post/UserPos";
import "./style.css";

const LayoutHome = () => {
  return (
    <div className="layout-home">
      <div className="all-posts">
        <UserPos
          imageProfile="https://media-cldnry.s-nbcnews.com/image/upload/t_fit-1500w,f_auto,q_auto:best/newscms/2019_38/3015691/190918-plenty-of-fish-dog-filter-se-227p.jpg"
          nameUser="Conejita__2001"
          textBody="Hola, ¿saben donde puedo conseguir boletos de avion baratos?"
          linkDetail="/details"
        />
        <UserPos
          imageProfile="https://www.freecodecamp.org/news/content/images/2022/06/hrishikesh.jpg"
          nameUser="@pablito"
          textBody="Holaaaaaaa, como puedo hacer un huevo?"
        />
        <UserPos
          imageProfile="https://www.ocregister.com/wp-content/uploads/migration/kr7/kr7zx4-tinafey450w09200905187090991333.jpg?w=535"
          nameUser="@Juanita"
          textBody="Tuve una experiencia paranormal, y tengo miedo"
        />
      </div>

      <Link to="/post" className="write-some">
        Escribe algo
      </Link>
    </div>
  );
};

export default LayoutHome;
