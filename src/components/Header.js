import {Link} from "react-router-dom";
import {setIsOpen} from "../state/action-creator/singleCard";
import {useDispatch} from "react-redux";



export default function Header() {


  const dispatch = useDispatch()

  function onSetClose() {
    dispatch(setIsOpen(false))
  }

  return (
      <div>

        <div className="top-panel">
          <div className="top-panel__container">
            <Link to="/">
              <div className="top-panel__title" onClick={onSetClose}>
                интернет магазин недвижимости
              </div>
            </Link>

            <div className="top-panel__favourites">
              <Link to="/bids">
                <button className="btn-show-favourites" onClick={onSetClose}>
                  <i className="fas fa-heart"></i> Bids
                </button>
              </Link>
              <Link to="/favorites">
                <button className="btn-show-favourites" onClick={onSetClose}>
                  <i className="fas fa-heart"></i> Избранное
                </button>
              </Link>
            </div>
          </div>
        </div>


        <div className="logo-wrapper">
          <Link to="/">
            <div className="logo">
              <div className="logo__title">КВАДРАТНЫЙ МЕТР</div>
              <div className="logo__subtitle">
                купить квартиру в один клик
              </div>
            </div>
          </Link>
        </div>
      </div>
  )
}