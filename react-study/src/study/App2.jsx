import { useState, useTransition } from "react";

/**
 * useState 상태관리
 */
function App2() {
    // const numState = useState(0);
    // const num = numState[0];
    // const setNum = numState[1];
    const [ num, setNum ] = useState(0);

    const handleIncreaseOnClick = () => {
        setNum(num + 1);
    }

    const handleDecreaseOnClick = () => {
        setNum(num - 1);
    }

    return <>
        <h1>{num}</h1>
        <button onClick={handleIncreaseOnClick}>1증가</button>
        <button onClick={handleDecreaseOnClick}>1감소</button>
    </>
}

export default App2;