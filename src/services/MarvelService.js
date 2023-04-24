class MarvelService {
    _apiBase = 'https://gateway.marvel.com:443/v1/public/';
    //_apiKey = 'apikey=a991531b2bf1a7bcfa13fde424dfcb0b'; 
    //мой зарегестрированный пока не работает, ошибка 401 ( Неавторизованный запрос/Unauthorized )
    _apiKey = 'apikey=c5d6fc8b83116d92ed468ce36bac6c62';

    getRosource = async (url) => {          // async -> будет какой то асинх-ый код
        const res = await fetch(url);
    
        if (!res.ok) {
            throw new Error(`Could not fetch ${url}, status: ${res.status}`);
        }
    
        return await res.json();            // возвращает в формате js
    }
    
    getAllCharacters = () => {              // получить все персонажи
        return this.getRosource(`${this._apiBase}characters?limit=9&offset=210&${this._apiKey}`);
    }

    getCharacter = (id) => {                // получить одного персонажа
        return this.getRosource(`${this._apiBase}characters/${id}?${this._apiKey}`);
    }
};

export default MarvelService;