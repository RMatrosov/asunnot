import Popup from "./Popup";
import {useDispatch} from "react-redux";
import {closePopupRed, openPopupRed} from "../state/action-creator/popup";
import {setFavorites} from "../state/action-creator/favorites";
import {Link} from "react-router-dom";
import {setIsOpen} from "../state/action-creator/singleCard";


export default function SingleCard({card, favoriteId}) {

  const dispatch = useDispatch()

  function openPopup() {
    dispatch(openPopupRed(true))
  }

  function closePopup() {
    dispatch(closePopupRed(false))
  }

  function onFavorites(value) {
    dispatch(setFavorites(value))
  }

  function onSetClose() {
    dispatch(setIsOpen(false))
  }

  return (

      <div className='sticky-footer'>

        <div className="content-wrapper">

          <div className="container p-0">
            <div className="heading-1">
              {card ? card.title : ''}, {card ? card.square : ''} м2 за {card ? card.price_total : ''} ₽
            </div>
            <div className="object">
              <div className="object__photo">
                <div className="object__photo-wrapper">
                  <img src={card ? card.image : '#'} alt=""/>
                </div>
              </div>
              <div className="object__desc">
                <div className="object__desc-sector">
                  ЖК {card ? card.complex_name : '#'}
                </div>
                <div className="object__desc-name">
                  <div className="object__desc-title">
                    Студия, {card ? card.square : ''} м2
                  </div>
                  <div className="object__desc-art">{card ? card.scu : ''}</div>

                  <button onClick={() => {onFavorites(card)}}
                          className={`button-favourite  ${favoriteId ? 'button-favourite--active disabled' : ''} `}>
                    <i className="fas fa-heart"></i> <span>{favoriteId ? 'В избранном' : 'В избранное'}</span>
                  </button>
                </div>
                <div className="object__desc-details">
                  <div className="params">
                    <div className="params__item">
                      <div className="params__definition">Корпус</div>
                      <div className="params__value">{card ? card.building : ''}</div>
                    </div>
                    <div className="params__item">
                      <div className="params__definition">Этаж</div>
                      <div className="params__value">{card ? card.floor : ''}</div>
                    </div>
                    <div className="params__item">
                      <div className="params__definition">Номер</div>
                      <div className="params__value">{card ? card.flat_number : ''}</div>
                    </div>
                    <div className="params__item">
                      <div className="params__definition">Комнат</div>
                      <div className="params__value">{card ? card.rooms : ''}</div>
                    </div>
                  </div>
                </div>
                <div className="details">
                  <div className="details__row">
                    <div className="details__name">Стоимость</div>
                    <div className="details__value details__value--price">
                      {card ? card.price_total : ''} ₽
                    </div>
                  </div>
                  <div className="details__row">
                    <div className="details__name">Цена за м2</div>
                    <div className="details__value">{card ? card.price_sq_m : ''} ₽/м2</div>
                  </div>
                  <div className="details__row">
                    <div className="details__name">Площадь</div>
                    <div className="details__value">{card ? card.square : ''} м2</div>
                  </div>
                </div>

                <button onClick={openPopup} className="button-order">Забронировать</button>

              </div>
            </div>
          </div>
          <Link to="/">
            <div className="container">
              <button className="back-to-results" onClick={onSetClose}
              >← Вернуться к результатам поиска
              </button
              >
            </div>
          </Link>
        </div>
        <Popup closePopup={closePopup} card={card}/>
      </div>
  )
}