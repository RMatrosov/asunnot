class Api {
    constructor({baseUrl}) {
        this._URL = baseUrl;
    };



    getItems() {
        return fetch(`${this._URL}items`)

            .then(this._handleResponse);
    };

    getItemsInfo() {
        return fetch(`${this._URL}itemsinfo`)
            .then(this._handleResponse);
    };


    getSingleCard(id) {
        return fetch(`${this._URL}items/${id}`, {})
            .then(this._handleResponse);
    };

    getFilterInfo(item, roomsArr, min, max, priceMin , priceMax) {
        console.log(item)
        return fetch(`${this._URL}items?${item !== null ? `complex=${item}` : ''}
        &${roomsArr !== null ? `rooms=${roomsArr}`: ''}
        &${min !== null ? `sqmin=${min}`: ''}
        &${max !== null ? `sqmax=${max}`: ''}
        &${priceMin !== null ? `pricemin=${priceMin}`: ''}
        &${priceMax !== null ? `pricemax=${priceMax}`: ''}`)
            .then(this._handleResponse);
    };


    addLike(data) {
        return fetch(`${this._URL}cards/likes/${data}`, {
            method: 'PUT',

        })
            .then(this._handleResponse);
    };

    deleteLike(data) {
        return fetch(`${this._URL}cards/likes/${data}`, {
            method: 'DELETE',

        })
            .then(this._handleResponse);
    };

    changeAvatar(item) {
        return fetch(`${this._URL}users/me/avatar`, {
            method: 'PATCH',

            body: JSON.stringify({
                avatar: item.link,
            })
        })
            .then(this._handleResponse);
    };

    _handleResponse(res) {
        if (res.ok) {
            return res.json();
        }
        return Promise.reject(`Ошибка: ${res.status}`);
    };

};

const api = new Api({
    baseUrl: 'http://jsproject.webcademy.ru/',
});

export default api;

