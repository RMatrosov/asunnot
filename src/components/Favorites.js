import {useSelector} from "react-redux";
import FavoriteCard from "./FavoriteCard";


function Favorites() {

  const {favoriteCards} = useSelector(({favorites}) => favorites);

  return (
      <div className="sticky-footer">

        <div className="content-wrapper">

          <div className="container p-0">
            <div className="heading-1">Избранное</div>
          </div>

          <div className="view-options-wrapper">
            <div className="container p-0">

              <div className="view-options">
                <div className="view-options__sort">
                  <label
                      htmlFor="sort-cards-by"
                      className="view-options__label"
                  >Сортировать</label
                  >
                  <select
                      id="sort-cards-by"
                      name=""
                      className="view-options__select"
                  >
                    <option value="">по цене ↑</option>
                    <option value="">по цене ↓</option>
                    <option value="">по площади ↑</option>
                    <option value="">по площади ↓</option>
                  </select>
                </div>
              </div>

            </div>
          </div>


          <div style={{minHeight: 500}} className="cards-wrapper">
            <div className="container p-0">
              <div className="row">
                {favoriteCards ? favoriteCards.map((card) =>
                    <FavoriteCard key={card.id} card={card}/>) : 'NO FAVORITES'}
              </div>
            </div>
          </div>
        </div>

      </div>
  )
}

export default Favorites