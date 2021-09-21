import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { useEffect } from "react";
import axios from "axios";
import {
  likeCard,
  removeCard,
  setCards,
  showOnlyLiked,
} from "./store/actions/actions";
import Card from "./components/card";
import likeIcon from "./assets/like.svg";

function App(props) {
  useEffect(() => {
    try {
      axios
        .get("https://rickandmortyapi.com/api/character")
        .then((result) => props.set_cards(result.data.results));
    } catch (e) {
      console.log(e);
    }
  }, []);

  console.log(props.state.likedCharacters);

  return (
    <div className="App">
      <header className="header">
        <h1>Тестовое задание для Альфа-Банк</h1>
      </header>
      <div className="cards-list-container">
        {props.state.showOnlyLiked ? (
          <button className="only-liked-button" onClick={props.show_only_liked}>
            Показать все
          </button>
        ) : (
          <button className="only-liked-button" onClick={props.show_only_liked}>
            Показать только
            <img
              className="only-liked-icon"
              src={likeIcon}
              alt="Изображение лайка"
            />
          </button>
        )}
        <div className="cards-list">
          {props.state.initialized === false ? (
            <p>Получение данных...</p>
          ) : props.state.showOnlyLiked ? (
            props.state.likedCharacters.length > 0 ? (
              props.state.likedCharacters.map((item) => (
                <Card
                  img={item.image}
                  text={item.name}
                  like={item.like ? true : false}
                  remove={() => props.remove_card(item.id)}
                  onLike={() => props.like_card(item.id)}
                />
              ))
            ) : (
              <p>
                Похоже, вы еще не лайкнули ни одну карточку. Нажмите кнопку
                "Показать все" и лайкните любую для отображения здесь.
              </p>
            )
          ) : props.state.characters.length > 0 ? (
            props.state.characters.map((item) => (
              <Card
                img={item.image}
                text={item.name}
                like={item.like ? true : false}
                remove={() => props.remove_card(item.id)}
                onLike={() => props.like_card(item.id)}
              />
            ))
          ) : (
            <p>
              У вас не осталось ни одной карточки, либо произошла ошибка.
              Попробуйте перезагрзуить страницу или обратитесь к разработчику.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    state,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    set_cards: bindActionCreators(setCards, dispatch),
    remove_card: bindActionCreators(removeCard, dispatch),
    like_card: bindActionCreators(likeCard, dispatch),
    show_only_liked: bindActionCreators(showOnlyLiked, dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
