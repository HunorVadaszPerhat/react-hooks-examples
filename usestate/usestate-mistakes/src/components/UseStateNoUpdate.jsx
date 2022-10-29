import React from 'react'

const UseStateNoUpdate = () => {
    const [number, setNumber] = React.useState(0)

    const increase = () => {
        setNumber(number + 1)
    };

    // This will not update the state because the value is not changed when the component is rendered again
    /*const increaseAsync = () => {
        setTimeout(() => {
            setNumber(number + 1)
        }, 2000);
    };*/

    // when you update your state it is better to use function version of setState instead of directly passing the value
    const increaseAsync = () => {
        setTimeout(() => {
            setNumber((prev) => prev + 1)
        }, 2000);
    };

    return (
        <React.Fragment>
            <h1>UseStateNoUpdate</h1>
            <h2>{number}</h2>
            <button onClick={increase}>Increase</button>
            <button onClick={increaseAsync}>Increase Async</button>
        </React.Fragment>
    )
}

export default UseStateNoUpdate