import React from "react"
import memesData from "../memesData.js"


export default function Meme(){
    const [meme, setMeme] = React.useState("")

    function getMemeImage() {
        const memesArray = memesData.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        setMeme(memesArray[randomNumber].url)
    }

    return(
        <main>
          <form className="form">
            <input
                type="text"
                placeholder="Top text"
                className="form--input"
            />
            <input 
                type="text"
                placeholder="Bottom text"
                className="form--input"
            />
            <button className="form--btn" onClick={getMeme}>Get a new meme image 🖼</button>
           </form>
           <img src={memeImage} className="meme--img" />
        </main>
    )
}