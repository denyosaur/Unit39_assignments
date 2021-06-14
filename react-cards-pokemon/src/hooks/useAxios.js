import { useState } from "react";
import axios from "axios";
import uuid from "uuid";

const useAxios = (url) => {
    const [state, setState] = useState([]);

    const addCard = async (card = "default") => {
        const fullUrl = (card === "default") ? url : `${url}${card}`;

        const res = await axios.get(`${fullUrl}`);
        setState([...state, { ...res.data, id: uuid() }]);
    };

    const resetDeck = () => {
        setState([]);
    };

    return [state, addCard, resetDeck];
}

export default useAxios;