class Api {
  constructor(config) {
    this._url = config.url;
    this._headers = config.headers;
  }
  _checkResponse(res) {
    if (res.ok) {
      return res.json();
    } else {
      return Promise.reject("Извините произошла ошибка");
    }
  }
  _getUserData() {
    return fetch(`${this._url}/users/me`, {
      method: "GET",
      headers: this._headers,
    }).then(this._checkResponse);
  }
  _getAllCard() {
    return fetch(`${this._url}/cards`, {
      method: "GET",
      headers: this._headers,
    }).then(this._checkResponse);
  }
  getAllData() {
    return Promise.all([this._getAllCard(), this._getUserData()]);
  }
}

const api = new Api({
  url: "https://mesto.nomoreparties.co/v1/cohort-41",
  headers: {
    authorization: "9f932bbc-acd7-4dae-8249-c98552659f56",
    "content-type": "application/json",
  },
});
export default api;
