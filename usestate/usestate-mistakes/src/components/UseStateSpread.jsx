import React from 'react'

const UseStateSpread = () => {
    const [input, setInput] = React.useState("");
    const [user, setUser] = React.useState({
        name: "John",
        email: "john@gmail.com",
        images: ["profile.jpg", "cover.jpg"]
    })

    // Using JS spread operator to copy the user object and ONLY change one property of the copied object
    const changeUser = () => {
        setUser((prev) => ({...prev, name: input}));
    };

    return (
        <React.Fragment>
            <h1>UseStateSpread</h1>
            <div>
                <input 
                    type="text" 
                    onChange={(e) => setInput(e.target.value)} />
                <button 
                    onClick={changeUser}>Change Name</button>
                <span>Username is {user.name}</span>
            </div>
        </React.Fragment>
    )
}

export default UseStateSpread