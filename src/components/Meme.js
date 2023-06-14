import React from 'react'


function Meme() {
    const [meme, setMeme] = React.useState(
        { topText: "", 
         bottomText: "", 
         randomImage: "http://i.imgflip.com/1bij.jpg"
        }
     )

  const [allMemeImages, setAllMemeImages] = React.useState([])
  //const [memeImage, setMemeImage] = React.useState("http://i.imgflip.com/1bij.jpg")
 
  
 //fetch version:
/* fetch("https://api.imgflip.com/get_memes")
    .then(res => res.json())
    .then(data => setAllMemeImages(data.data.memes)) 
  */

//did not like this async version:
/*
React.useEffect(async () => {
        const res = await fetch("https://api.imgflip.com/get_memes")
        const data = await res.json()
        setAllMemes(data.data.memes)
    }, [])
*/

//had to do it this way
  React.useEffect(() => {
    async function fetchData(){
        const res = await fetch("https://api.imgflip.com/get_memes")
        const data = await res.json()
        setAllMemeImages(data.data.memes)
    }
   fetchData()
    }, [])

    function getMemeImage() {
       
        const randomNumber = Math.floor(Math.random() * allMemeImages.length)
        const url = allMemeImages[randomNumber].url
        setMeme(prevMeme => {
          return {
             ...prevMeme,
             randomImage: url
         }
     }
     )  
        
    }

  function handleChange(event){
    const {name, value} = event.target
    
    setMeme(prevMeme => {
        return{
            ...prevMeme,
            [name] : value
        }
    })
    
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