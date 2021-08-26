import {useSelector} from "react-redux";
import React from 'react';

const Filter = React.memo(function Filter({
                                   onSetFilterValue,
                                   onSetRooms,
                                   onSetMax, onSetMin, onsetPriceMin,
                                   onsetPriceMax
                               }) {

    const itemsLength = useSelector(({cards}) => cards.items.length);
    const filterValues = useSelector(({filterInfo}) => filterInfo.items);


    return (
        <div className="container p-0">
            <div className="heading-1">Выбор квартир:</div>
            <div className="filter">
                <div className="filter__col">
                    <div className="filter__label">Выбор проекта:</div>
                    <select onChange={(e) => onSetFilterValue(e.target.value)} name="complex" id=""
                            className="filter__dropdown">
                        <option value="all">Все проекты</option>
                        {filterValues.complexNames && filterValues.complexNames.map((item, i) =>
                            <option key={i} value={item}>ЖК {item}</option>)}
                    </select>
                </div>
                <div className="filter__col rooms">
                    <div className="filter__label">Комнат:</div>
                    <div className="rooms__wrapper">
                        {filterValues.roomValues && filterValues.roomValues.map((item, i) =>
                            <div key={i} style={{marginRight: 10}}>
                                <label
                                    htmlFor="rooms"
                                    className="rooms__btn">
                                    <input
                                        name="rooms"
                                        type="checkbox"
                                        id={i}
                                        className="rooms__checkbox"
                                        value={item}
                                        onChange={(e) => {
                                            onSetRooms(e.target)
                                        }}

                                    />
                                    {item}</label>
                            </div>)}
                    </div>
                </div>
                <div className="filter__col">
                    <div className="filter__label">Площадь:</div>
                    <div className="range__wrapper">
                        <label className="range">
                            <div htmlFor="" className="range__label">от</div>
                            <input
                                onChange={(e) => onSetMin(e.target.value)}
                                name="sqmin"
                                min="0"
                                type="number"
                                className="range__input"
                                placeholder={filterValues.squareMin}
                            />
                            <div className="range__value">м2</div>
                        </label>
                        <label className="range">
                            <div htmlFor="" className="range__label">до</div>
                            <input
                                onChange={(e) => onSetMax(e.target.value)}
                                name="sqmax"
                                min="0"
                                type="number"
                                className="range__input"
                                placeholder={filterValues.squareMax}
                            />
                            <div className="range__value">м2</div>
                        </label>
                    </div>
                </div>
                <div className="filter__col">
                    <div className="filter__label">Стоимость:</div>
                    <div className="range__wrapper">
                        <div className="range">
                            <label htmlFor="" className="range__label">от</label>
                            <input
                                onChange={(event) => onsetPriceMin(event.target.value)}
                                type="number"
                                name="pricemin"
                                min="0"
                                className="range__input range__input--price"
                                placeholder={filterValues.priceMin}
                            />
                            <div className="range__value">₽</div>
                        </div>
                        <div className="range">
                            <label htmlFor="" className="range__label">до</label>
                            <input
                                onChange={(event) => onsetPriceMax(event.target.value)}
                                type="number"
                                name="pricemax"
                                min="0"
                                className="range__input range__input--price"
                                placeholder={filterValues.priceMax}
                            />
                            <div className="range__value">₽</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="filter__buttons">
                <button className="filter__show">Найдено {itemsLength} объектов
                </button>
            </div>
        </div>
    )
})

export default Filter

