import { useEffect, useState } from "react";

export default function Joker() {

    let[joke, setJoke] = useState({});
    // let[joke, setJoke] = useState({})



const URL = "https://official-joke-api.appspot.com/random_joke";

const getJoke = async () => {
  let response = await fetch(URL);
  let jsonResponse = await response.json();
  setJoke({setup: jsonResponse.setup, punchline: jsonResponse.punchline})
}
useEffect(() => {
    async function getFirstJoke() {
    let response = await fetch(URL);
    let jsonResponse = await response.json();
    console.log(jsonResponse);
    setJoke({setup: jsonResponse.setup, punchline: jsonResponse.punchline})
}
getFirstJoke();
}, []);


    return (
        <div>
            <h3>Joker</h3>
            <div>
                <h2>{joke.setup}</h2>
                <p>{joke.punchline}</p>
            </div>

            <button onClick={getJoke}>Click Fo Joke</button>
        </div>
    )
}