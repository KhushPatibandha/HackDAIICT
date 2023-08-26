import React, { useState } from "react";

function SignIn() {
    const [contact, setContact] = useState({
        fname: "",
        lname: "",
        email: "",
    });

    function handleChange(event) {
        const {name, value} = event.target ;

        setContact(prevValue => {
            if (name === "fname"){
                return {
                    fname: value,
                    lname: prevValue.lname,
                    email: prevValue.email
                };
            }else if (name === "lname"){
                return {
                    fname: prevValue.fname,
                    lname: value,
                    email: prevValue.email
                };
            }else if (name === "email"){
                return {
                    fname: prevValue.fname,
                    lname: prevValue.lname,
                    email: value
                };
            }
        });
    }

    return (
        <div className="container">
            <h1>
                Hello {contact.fname} {contact.lname}
            </h1>
            <p>{contact.email}</p>
            <form>
                <input
                    onChange={handleChange}
                    value={contact.fname}
                    name="fname"
                    placeholder="First Name"
                />
                <input
                    onChange={handleChange}
                    value={contact.lname}
                    name="lname"
                    placeholder="Last Name"
                />
                <input
                    onChange={handleChange}
                    value={contact.email}
                    name="email"
                    placeholder="Email"
                />
                <button>SignIn</button>
            </form>
        </div>
    );
}

export default SignIn;