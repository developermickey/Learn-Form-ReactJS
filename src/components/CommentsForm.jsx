import { useState } from "react"

export default function CommentsForm() {
    let [formData, setFomData] = useState({
        username: "",
        remarks: "",
        rating: 5
    });



    let handleInputChange = (event) => {
        setFomData((currData) => {
            return {...currData, [event.target.name]: event.target.value}
        })
    }

    let handleSubmit = (event) => {
        console.log(formData);
        event.preventDefault();
        setFomData({
            username: "",
            remarks: "",
            rating: 5
        })
    }
    return (
        <div>
            <h4>Give Some Comments</h4>
            <hr />

            <form onSubmit={handleSubmit}>
            <label htmlFor="username">Username</label> <br /> <br />
            <input value={formData.usename} type="text" placeholder="username" onChange={handleInputChange} id="username" name="username" />
            <br />
            <br />
            <label htmlFor="remarks">Remarks</label> <br /> <br />
            <textarea value={formData.remarks} placeholder="Remarks" onChange={handleInputChange} id="remarks" name="remarks"> </textarea>
            <br />
            <br />
            <label htmlFor="rating">Rating</label> <br /> <br />
            <input value={formData.rating} type="number" id="rating" placeholder="Rating" min={1} max={5} onChange={handleInputChange} name="rating" />
            <br />
            <br />

            <button>Add Comments</button>
               
            </form>
        </div>
    )
}