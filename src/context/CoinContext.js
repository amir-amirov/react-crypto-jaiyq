import { createContext, useState, useEffect } from "react";

export const CoinContext = createContext();

const CoinContextProvider = ({children}) => {
    
    const [allCoin, setAllCoin] = useState([])
    const [currency, setCurrency] = useState({
        name: "usd",
        symbol: "$"
    })

    const fetchAllCoin = async () => {

        const apiKey = process.env.REACT_APP_GECKO_COIN_API_KEY;

        const options = {
            method: 'GET',
            headers: {accept: 'application/json', 'x-cg-demo-api-key': apiKey}
        };
          
          fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency.name}`, options)
            .then(response => response.json())
            .then(response => setAllCoin(response))
            .catch(err => console.error(err));
    }

    useEffect(() => {
        fetchAllCoin()
    }, [currency])

    const contextValue = {
        allCoin, currency, setCurrency
    }

    return (
        <CoinContext.Provider value={contextValue}>
            {children}
        </CoinContext.Provider>
    )
}

export default CoinContextProvider;