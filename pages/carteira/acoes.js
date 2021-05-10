import TickerMain from '../../components/tickerMain'
export default function Fiis() {
    const arrayAcoesCarteira = ["petr4", "itub4", "cmig4", "vale3", "bidi4", "bbdc4", "usim5", "ggbr4", "goau4", "azul4", "cvcb3"];
    const title = "Ações";
    return <>
    <TickerMain arrayTickers={arrayAcoesCarteira} title={title} routeTo="/carteira/fiis" routeToTitle="Carteira de FIIS"></TickerMain>
    </>
}