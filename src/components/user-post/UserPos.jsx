import { Link } from "react-router-dom";
import "./UserPost.css";

const UserPos = ({ imageProfile, textBody, nameUser, linkDetail }) => {
  return (
    <div className="box-post">
      <div className="co-box-post">
        <div className="user-profile">
          <div className="image-main">
            <img src={imageProfile} alt="" />
          </div>

          <div className="info-user-post">
            <p className="name-user-post">{nameUser}</p>
            <p className="time-post">hace instantes</p>
          </div>
        </div>

        <span className="topic-post">Otro</span>
      </div>

      <div className="body-text-post" id="show-text-post">
        <p className="inner-text">{textBody}</p>
      </div>
      <Link to={linkDetail} className="view-comments">
        <span className="num-comments">5</span>
        <span className="icon-comment">
          <ion-icon name="chatbox-outline"></ion-icon>
        </span>
      </Link>
    </div>
  );
};

export default UserPos;
