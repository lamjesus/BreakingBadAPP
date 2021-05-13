
 export const quoteFetch = async (character) => {
    const url = `https://www.breakingbadapi.com/api/quote?author=${encodeURI(character)}`;
    const resp =  await fetch(url);
    const data =  await resp.json();
    
    const quotes = data.map(quote =>{
        return {
            author:quote.author,
            quote:quote.quote,
            quote_id:quote.quote_id,
            series:quote.series
        }
    
    })
    return quotes;
}