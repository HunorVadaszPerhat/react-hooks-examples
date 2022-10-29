import React from 'react'

const UseStateNoInit = () => {
    const [user, setUser] = React.useState() // this will not work because the initial value is undefined

    return (
        <React.Fragment>
            <h1>UseStateNoInit</h1>
            <span>Username is {user.name}</span>
        </React.Fragment>
    )
}

export default UseStateNoInit