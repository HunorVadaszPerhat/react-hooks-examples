import React from 'react'

const UseStateInputsAllUpdate = () => {
    const [user, setUser] = React.useState({    
        username:"",
        name:"",
        surname:"",
        email:"",
        password:"",
        country:"",
        city:"",
        address: "",
    });  

    // method will update any properties of the object IF that property is changed in the form
    // usefull when we want to update more properties of the object at the same time
    // NOTE: all properties of the object are the same data type. In case of different data types, use separate methods!
    // NOTE: instead of using useState hook it is possible to use useReducer hook
    const handleChange = (e) => {
        setUser((prev) => ({...prev, [e.target.name]: e.target.value}));
    };

    console.log("User object: ", user);

    return (
        <React.Fragment>
            <h1>UseStateInputsAllUpdate</h1>
            <div>
                <form>
                    <input type="text" onChange={handleChange} name="username" placeholder="Username" />
                    <input type="text" onChange={handleChange} name="name" placeholder="Name" />
                    <input type="text" onChange={handleChange} name="surname" placeholder="Surname" />
                    <input type="text" onChange={handleChange} name="email" placeholder="Email" />
                    <input type="text" onChange={handleChange} name="password" placeholder="Password" />
                    <input type="text" onChange={handleChange} name="country" placeholder="Country" />
                    <input type="text" onChange={handleChange} name="city" placeholder="City" />
                    <input type="text" onChange={handleChange} name="address" placeholder="Address" />
                    <button type="submit">Submit</button>
                </form>
            </div>
        </React.Fragment>
    )
}

export default UseStateInputsAllUpdate