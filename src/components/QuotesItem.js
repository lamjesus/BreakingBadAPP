import React from 'react'

export const QuotesItem = ({quote,quote_id,series,author}) => {
    
    
    return (
        <>
        {
            <div className="flex justify-center" >
                <div className="max-w-lg w-full rounded-lg shadow-lg p-4 bg-white my-10 text-center ">
                    <h3 className="font-semibold text-lg tracking-wide">Here is link for your payment.</h3>
                    <p className="text-gray-500 my-1">
                        "{quote}"
                    </p>
                    <div className="mt-2">
                        <a href="https://www.imdb.com/title/tt0903747/" className="text-blue-700  inline-flex items-center font-semibold tracking-wide">
                            <span className="hover:underline">
                                {author}
                            </span>
                            <span className="text-xl ml-2">&#8594;</span>
                        </a>
                    </div>
                </div>
            </div>
        }
            
               
            
        </>
    )
}
