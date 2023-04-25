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
    
    getAllCharacters = async () => {              // получить все персонажи
        const res = await this.getRosource(`${this._apiBase}characters?limit=9&offset=210&${this._apiKey}`);
        res.data.results.map(this._transformCharacter);
    }

    getCharacter = async (id) => {                // получить одного персонажа
        const res = await this.getRosource(`${this._apiBase}characters/${id}?${this._apiKey}`);
        return this._transformCharacter(res.data.results[0]);
    }

    _transformCharacter = (char) => {       // вывести данные о персонаже
        return {
            name: char.name,                 // имя 
            description: char.description,   // описание
            thumbnail: char.thumbnail.path + '.' + char.thumbnail.extension, // изобраражение
            homepage: char.urls[0].url,      // ссылка
            wiki: char.urls[1].url           // ссылка
        }
    }
};

export default MarvelService;