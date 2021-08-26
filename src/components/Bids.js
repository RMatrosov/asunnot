import {useEffect} from "react";
import {fetchBids} from "../state/action-creator/bids";
import {useDispatch, useSelector} from "react-redux";
import Preloader from "./Preloader";


function Bids() {

  const {bids} = useSelector(({bids}) => bids);
  const {isLoaded} = useSelector(({bids}) => bids);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBids());
  }, [dispatch]);


  return (
      <div className="panels-wrapper">
        <div className="container p-0">
          {isLoaded ? bids.map(item => <div key={item.id} className="panel panel--no-hover">
            <div className="panel__bidname">{item.name}</div>
            <div className="panel__bidphone">{item.phone}</div>
          </div>) : <Preloader/>}
        </div>
      </div>
  )
}

export default Bids