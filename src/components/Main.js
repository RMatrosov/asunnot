import Card from "./Card";
import {useSelector} from "react-redux";
import Preloader from "./Preloader";


function Main() {

    const items = useSelector(({cards}) => cards.items);
    const isLoaded = useSelector(({cards}) => cards.isLoaded);

    return (
        <div className='cards-wrapper'>
            <div className='container p-0 pt-5'>
                <div className="row">
                    {isLoaded ? items.map((card) => <Card key={card.id} card={card}/>) : <Preloader/>}
                </div>
            </div>
        </div>
    )
}

export default Main