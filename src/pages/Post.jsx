import { Link } from "react-router-dom";
import "./Post.css";

const Post = () => {
  return (
    <>
      <div>
        <div className="header-posts">
          <Link to="/" className="back-post">
            Atrás
          </Link>
          <h1>Post</h1>
        </div>

        <label htmlFor="categoria" className="category">
          Categoria:
        </label>
        <select>
          <option value="manzana">Amor</option>
          <option value="banana">Consejo</option>
          <option value="uva">Fininzas</option>
          <option value="naranja">Pregunta</option>
          <option value="pera">Salud</option>
        </select>
      </div>

      <div className="form-post">
        <form action="">
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            placeholder="Escribe algo.."
          ></textarea>

          <button>Post</button>
        </form>
      </div>
    </>
  );
};

export default Post;
