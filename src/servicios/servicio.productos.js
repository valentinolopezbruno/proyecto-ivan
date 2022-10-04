import Config from "../config"

const servicioProducos = {
    getAll: function() {
         return fetch({url: Config.API_URL, method: 'GET', headers: Config.API_HEADERS})
    }
}

export default servicioProducos