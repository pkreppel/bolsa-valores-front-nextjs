const TickersList = ({tickers}) => {
  let key = 0;
  if (tickers.length > 0) {
    return (
      <>
        <div className="flex-container">
            {tickers.map((ticker) => (
                <div key={key++}>
                    <span className="stockTitle">{ticker.nome}</span>
                    <span className="stockValue">{ticker.valor}</span>
                </div>
            ))}
        </div>  
      </>
    );
  }
  else{
    return (<div className="loader"><div className="loader-content"></div></div>);
  }
};

export default TickersList;