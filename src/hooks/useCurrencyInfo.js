import {useEffect, useState} from "react"


function useCurrencyInfo(currency){
    const [data, setData] = useState({})
    useEffect(() => {
        fetch(`https://v6.exchangerate-api.com/v6/8d2bb1a3f34047a7d08739c5/latest/${currency}`)
        .then((res) => res.json())
        .then((res) => setData(res.conversion_rates))
        console.log(data);
    }, [currency])
    console.log(data);
    return data
}

export default useCurrencyInfo;