import {fetchCard} from "../state/action-creator/singleCard";
import {useDispatch} from "react-redux";
import {Link} from "react-router-dom";


function FavoriteCard({card}) {

  const dispatch = useDispatch()

  function onSetSingleCard(id) {
    dispatch(fetchCard(id));
  }

  return (
      <article className="col-md-4">
        <Link to="/single">
          <div className="card" onClick={() => onSetSingleCard(card.id)}>
            <div className="card__header">
              <div className="card__title">
                ЖК {card.complex_name}
              </div>
              <div className="card__like">
                <i className="fas fa-heart"></i>
              </div>
            </div>
            <div className="card__img">
              <img
                  src={card.image}
                  alt="План квартиры"
              />
            </div>
            <div className="card__desc">
              <div className="card__price">
                <div className="card__price-total">
                  {card.price_total} ₽
                </div>
                <div className="card__price-per-meter">
                  {card.price_sq_m} ₽/м2
                </div>
              </div>

              <div className="card__params params">
                <div className="params__item">
                  <div className="params__definition">
                    Комнат
                  </div>
                  <div className="params__value">{card.rooms}</div>
                </div>
                <div className="params__item">
                  <div className="params__definition">
                    Площадь
                  </div>
                  <div className="params__value">{card.square}</div>
                </div>
              </div>

            </div>
            <div className="card__footer">
              <div className="card__art">{card.scu}</div>
              <div className="card__floor">Этаж {card.floor} из {card.floors_total}</div>
            </div>
          </div>
        </Link>
      </article>

  )
}

export default FavoriteCard