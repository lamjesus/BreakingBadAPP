import React from 'react'
import { useQuoteFetch } from '../hooks/useQuoteFetch'
import { QuotesItem } from './QuotesItem';
// import {quoteFetch} from '../helpers/FetchQuotes'
const CharacterRender =  ({character}) => {
    
    const {data,loading} = useQuoteFetch(character);
    
    // const [characters, setCharacters] = useState([]);
    
    // useEffect(()=>{
    //     quoteFetch(character).then(setCharacters)  
    // },[character])

   
   
    
    return (
        <>
            <h3 className="text-5xl" >{character}</h3>
            
              {loading?'Loading.....':'Quote loaded'}
                {
                    
                    
                    
                    data.map(char =>(

                        <QuotesItem 
                            // char={char}
                            key={char.quote_id} 
                            {...char}
                        
                        />                       
                    )
                    )
                }
                
            
        </>
    )
}

export default CharacterRender
