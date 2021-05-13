import React,{useState} from 'react'
import AddCharacters from './components/AddCharacters'
import CharacterRender from './components/CharacterRender'

const BreakingBadApp = () => {
    //const characters = ['Walter White','Skyler White','Jesse Pikman'];
    const [characters, setCharacters] = useState(['Walter White'])
    
    // const addCharacter = ()=>{
    //     setcharacters( char => [...characters,'Jesse Pinkman','Skyler White']);// char es el estado anterior
    // }
    return (
        <>
            <h1>Quotes Breaking Bad</h1>
            <AddCharacters setCharacters = {setCharacters}/>
            <hr></hr>
            
            <ul className="text-center my-10">
                {
                    characters.map(char =>( 
                        <CharacterRender key={char} character={char}/>
    
                    ))
                }
            </ul>
            
        </>
    )
}

export default BreakingBadApp
