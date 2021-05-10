import Link from 'next/link'
import bolsaService from '../services/bolsaService'
import TickersList from '../components/tickersList';
import React, { useState, useEffect } from "react";

export default function TickerMain({ arrayTickers, title, routeTo, routeToTitle }) {
    //const arrayAcoes = [{nome:"teste", valor:"aa"}];
    const [arrayAcoes, setArrayAcoes] = useState([]);
    const getTickers = () => {
        //const arrayAcoesCarteira = ["petr4", "itub4", "cmig4", "vale3", "bidi4", "bbdc4", "usim5", "ggbr4", "goau4", "azul4", "cvcb3"];
        bolsaService.getTickers(arrayTickers, arrayAcoes, setArrayAcoes);
    }

    useEffect(() => {
        console.log(title);
        getTickers();
    }, []);

    return <div>
        <div className="main-tickers">
            <h1>{title}</h1>
            <h2>
                <div className="card">
                    <Link href={routeTo}>
                        <a>{routeToTitle}</a>
                    </Link>
                </div>
            </h2>
            <h2>
                <div className="card">
                    <Link href="/">
                        <a>Home</a>
                    </Link>
                </div>
            </h2>
        </div>
        <TickersList tickers={arrayAcoes}></TickersList>
    </div>
}
