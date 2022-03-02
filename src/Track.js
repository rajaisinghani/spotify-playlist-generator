import React, {useEffect, useState} from 'react';
import axios from 'axios';

function Track() {
    const [characters, setCharacters] = useState([])
    const [query, setQuery] = useState("")

    useEffect(() => {
      axios(`https://api.spotify.com/v1/search?q=${query}&type=track`, {
        method: 'GET',
        headers: { 'Authorization' : 'Bearer ' + localStorage.getItem('token')}
      })
      .then (genreResponse => {
        setCharacters(genreResponse.data.tracks.items)        
        console.log(characters);
      })
      .catch(error => {
        console.log(error.response)
     })
    }, [query])

    return (
        <div className="Track">
            <div className="search">
                <input type="text"
                       placeholder={"Search Character"}
                       className={"input"}
                       onChange={event => setQuery(event.target.value)}
                       value={query}
                />
            </div>
            <div className="results">
                {characters.map(character => (
                    <div>
                        <img src={character.image} alt={character.name}/>
                        {character.name}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Track;