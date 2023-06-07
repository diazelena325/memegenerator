import React from 'react'
import memesData from '../memesData.js'

function Meme() {
  const [allMemeImages, setAllMemeImages] = React.useState(memesData)
  //const [memeImage, setMemeImage] = React.useState("http://i.imgflip.com/1bij.jpg")
  const [meme, setMeme] = React.useState(
     { topText: "", 
      bottomText: "", 
      randomImage: "http://i.imgflip.com/1bij.jpg"
     }
  )
  
  function handleChange(event){
    const {name, value} = event.target
    
    setMeme(prevMeme => {
        return{
            ...prevMeme,
            [name] : value
        }
    })
    
}

    function getMemeImage() {
        const memesArray = allMemeImages.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        const url = memesArray[randomNumber].url
        setMeme(prevMeme => {
          return {
             ...prevMeme,
             randomImage: url
         }
     }
     )  
        
    }

  return (
   <div className='meme-form'>
    <div className='meme-form-inputs'>
    <input 
                    type="text"
                    placeholder="Top text"
                    className="form--input"
                    name="topText"
                    value={meme.topText}
                    onChange={handleChange}
                />
                <input 
                    type="text"
                    placeholder="Bottom text"
                    className="form--input"
                    name="bottomText"
                    value={meme.bottomText}
                    onChange={handleChange}
                />
       
            </div>
            <button 
                    className="form--button"
                    onClick={getMemeImage}
                >
                    Get a new meme image 🖼
                </button>
            <div className="meme">
                <img src={meme.randomImage} className="meme--image" alt='memeimage'/>
                <h2 className="meme--text top">{meme.topText}</h2>
                <h2 className="meme--text bottom">{meme.bottomText}</h2>
            </div>
   </div>
  
  )
}

export default Meme