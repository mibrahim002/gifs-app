import { useState } from "react";

export const useCounter = () => {

    const [counter, setCounter] = useState(0)

    const handleAdd = () => {
        setCounter(counter + 1);
    }

    const handleSubtract = () => {
        setCounter(counter - 1);
    }

    const handleReset = () => {
        setCounter((prevState) => prevState-1);
    }


    return {
        // Properties
        counter,

        // Methods / Actions
        handleAdd,
        handleSubtract,
        handleReset

    }

}