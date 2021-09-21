import "./card.css";
import removeIcon from "../../assets/remove.svg";
import likeIcon from "../../assets/like.svg";
import unlikeIcon from "../../assets/unlike.svg";

export default function Card({ img, text, like, remove, onLike }) {
  return (
    <div className="card">
      <button className="card-remove-btn" onClick={remove}>
        <img
          className="card-remove-btn-icon"
          src={removeIcon}
          alt="Кнопка удаления"
        />
      </button>
      <img className="card-img" src={img} alt={text} />
      <div className="card-bottom">
        <span>{text}</span>
        <button className="card-like-btn" onClick={onLike}>
          {like ? (
            <img
              className="card-like-btn-icon"
              src={likeIcon}
              alt="Кнопка поставить лайк"
            />
          ) : (
            <img
              className="card-like-btn-icon"
              src={unlikeIcon}
              alt="Кнопка убрать лайк"
            />
          )}
        </button>
      </div>
    </div>
  );
}
