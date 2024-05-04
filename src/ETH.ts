import axios from "axios";
import React from "react";

export default function ETH() {
  const [price, setPrice] = React.useState([{current_price: 0}]);

  React.useEffect(() => {
    axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd'
    ).then((response) => {
      setPrice(response.data);
    });
  }, []);

  if (!price) return 0;

  return price[1]?.current_price;
}