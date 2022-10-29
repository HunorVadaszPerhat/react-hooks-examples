import React from 'react'

const UseStateNoInit = () => {
    // const [user, setUser] = React.useState({}) // this will not work because the initial value is undefined
    // const [user, setUser] = React.useState({}) // initial value as an empty object to avoid render error
    const [user, setUser] = React.useState({
        username:"",
        age:"",
        email:"",
        images:[]
    })

    /*
        user: {
            name: 'John',
            age: 24,
            mail: 'john@gmail.com',
            images: ["profile.jpg", "cover.jpg"]
        }
    */

    return (
        <React.Fragment>
            <h1>UseStateNoInit</h1>
            <span>Username is {user.name}</span>
            {/* this will throw an error because the initial value is undefined */}
            {/* error in browser can be avoided if object properties are specified in useState as above*/}
            <span>Profile picture is {user.images[1]}</span>  
        </React.Fragment>
    )
}

export default UseStateNoInit