import { useState } from "react"

export default function Form() {
    // let [fullName, setFullName] = useState("");
    // let [username, setUserName] = useState("");

    // let handleNameChange = (event) => {
    //     setFullName(event.target.value);
    // }

    // let handleUsername = (event) => {
    //     setUserName(event.target.value);
    // }

    let [formData, setFormData] = useState({
        fullname: "",
        username: "",
        password: "",
    })

    let handleInputChange = (event) => {
        // let fieldName = event.target.name;
        // let newValue = event.target.value;

        setFormData((currData) => {
            return { ...currData, [event.target.name]: event.target.value };
        })

    }

    let handleSubmit = (event) => {
        event.preventDefault();
        setFormData({
            fullname: "",
            username: "",
            password: ""
        })
    }


    return (
        <form style={{ textAlign: "left" }} onSubmit={handleSubmit}>
            <div style={{ marginBottom: "1rem" }}>
                <label style={{ textAlign: "left" }} htmlFor="fullname">Full Name</label> <br />
                <input
                    style={{ height: "30px" }}
                    type="text"
                    name="fullname"
                    placeholder="Enter your full name"
                    value={formData.fullname}
                    onChange={handleInputChange}
                    id="fullname" />
            </div>

            <div style={{ marginBottom: "1rem" }}>
                <label htmlFor="username">Username</label><br />
                <input
                    style={{ height: "30px" }}
                    type="text"
                    name="username"
                    placeholder="Enter your Username"
                    value={formData.username}
                    onChange={handleInputChange}
                    id="username" />
            </div>

            <div style={{ marginBottom: "1rem" }}>
                <label htmlFor="password">Password</label><br />
                <input
                    style={{ height: "30px" }}
                    type="password"
                    name="password"
                    placeholder="Enter your Username"
                    value={formData.password}
                    onChange={handleInputChange}
                    id="password" />
            </div>

            <button>Submit</button>
        </form>
    )
}