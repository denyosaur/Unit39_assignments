import { useState } from "react";

const useFlip = (initial) => {
    const [state, setState] = useState(initial);
    const flipCard = () => {
        setState(isUp => !isUp);
    };
    return [state, flipCard];
}

export default useFlip;