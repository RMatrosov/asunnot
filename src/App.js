import './App.css';
import Main from "./components/Main";
import Filter from "./components/Filter";
import {useCallback, useEffect} from "react";
import SingleCard from "./components/SingleCard";
import Header from "./components/Header";
import {useDispatch, useSelector} from "react-redux";
import {fetchCards} from "./state/action-creator/cards";
import {setFilterValueR, setMaxR, setMinR, setPriceMaxR, setPriceMinR, setRoomsR} from "./state/action-creator/filters";
import {Route, Switch} from "react-router-dom";
import Favorites from "./components/Favorites";
import {fetchFilterInfo} from "./state/action-creator/filterInfo";
import Bids from "./components/Bids";
import Preloader from "./components/Preloader";


function App() {

  const dispatch = useDispatch();

  const {filterValueR, roomsArrR, minR, maxR, priseMinR, priceMaxR} = useSelector(({filters}) => filters);

  const {item} = useSelector(({card}) => card);

  const {isOpen} = useSelector(({card}) => card);

  const {favoriteId} = useSelector(({favorites}) => favorites);

  useEffect(() => {
    dispatch(fetchCards(filterValueR, roomsArrR, minR, maxR, priseMinR, priceMaxR));
  }, [filterValueR, roomsArrR, minR, maxR, priseMinR, priceMaxR, dispatch]);

  useEffect(() => {
    dispatch(fetchFilterInfo());
  }, [dispatch]);


  const onSetFilterValue = useCallback((e) => {
    if (e === 'all') {
      dispatch(setFilterValueR(null));
    } else {
      dispatch(setFilterValueR(e));
    }
  }, [dispatch]);

  function onSetRooms(e) {
    dispatch(setRoomsR(e));
  }

  function onSetMax(e) {
    dispatch(setMaxR(e));
  }

  function onSetMin(e) {
    dispatch(setMinR(e));
  }

  function onsetPriceMin(e) {
    dispatch(setPriceMinR(e));
  }

  function onsetPriceMax(e) {
    dispatch(setPriceMaxR(e));
  }

  return (

      <div className="App">
        <Header/>
        <Switch>
          <Route path="/" exact>
            <>
              <Filter onSetRooms={onSetRooms} onSetFilterValue={onSetFilterValue}
                      onSetMax={onSetMax} onSetMin={onSetMin} onsetPriceMin={onsetPriceMin}
                      onsetPriceMax={onsetPriceMax}
              />
              <Main/>
            </>
          </Route>
          <Route path="/favorites">
            <Favorites/>
          </Route>
          <Route path="/bids">
            <Bids/>
          </Route>
          <Route path="/single">
            {isOpen ? (<SingleCard card={item} favoriteId={favoriteId[item.id] && favoriteId[item.id]}/>) : (
                <Preloader/>)}
          </Route>
        </Switch>
      </div>


  );
}

export default App;

