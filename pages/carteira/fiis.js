import TickerMain from '../../components/tickerMain'
export default function Fiis() {
    const arrayFiis = ["vilg11", "irdm11", "recr11", "hfof11", "hgpo11", "ggrc11", "alzr11", "xpml11"];
    const title = "FIIS";
    return <>
    <TickerMain arrayTickers={arrayFiis} title={title} routeTo="/carteira/acoes" routeToTitle="Carteira de Ações"></TickerMain>
    </>
}