import axiosRequest from './axiosRequest';
import utils from './utils'

class bolsaService {
  constructor() {
    this.urlBase = 'b3-ticker';
  }

  getTickersService(ticker, data) {
    return new Promise((resolve, reject) => {
      try {
        data = '2021-05-06';
        axiosRequest.post(`${this.urlBase}/${ticker}/${data}`)
          .then((response) => {
            resolve(response.data);
          }).catch((e) => {
            reject(e);
          });
      } catch (e) {
        reject(e);
      }
    });
  }
  getTicker(ticker) {
    return this.getTickersService(ticker, utils.getCurrentDateEN()).then((resultado) => {
        if (typeof resultado == "string"){
          return {nome : "Erro de leitura", valor : resultado}
        }
        else {
          if (resultado.values.length === 0) {
            return {nome : `Erro de leitura no ticker ${ticker}`, valor : ''}
          }
          return {nome : resultado.friendlyName, 
          valor : utils.formatMoney(resultado.values[0][2])};
        }
    });
  }
  getTickers(arrayTickers, tickerstoUpdate, setTickersUpdate){
      Promise.all(
      arrayTickers.map((ticker) =>
          this.getTicker(ticker)
          .then(result => {     
              console.log(tickerstoUpdate);
              //tickerstoUpdate.push(result);
              setTickersUpdate(items => {
                const newItems = [...items]; // Ref A
                newItems.push(result);
                return newItems;
            });
          })
          .catch(err => {
          console.log(err)
          })
      )).then(() => console.log(this.meusTickers))
  }
}

export default new bolsaService();
