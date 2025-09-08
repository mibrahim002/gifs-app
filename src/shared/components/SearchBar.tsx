import { useEffect, useState, type KeyboardEvent } from 'react'

interface Props {
    placeholder: string,
    onQuery: (query: string) => void,
}

export const SearchBar = ({ placeholder, onQuery }: Props) => {
    const [query, setQuery] = useState("")

    useEffect(()=> {
       
       const timeoutId = setTimeout(()=> onQuery(query), 700)

        return  () => clearTimeout(timeoutId)
        

    }, [query, onQuery])

    const handlerKeyUp = (event: KeyboardEvent<HTMLInputElement>) => {
        if (event.key === "Enter") onQuery(query)

    }
    return (
        <div className='search-container'>
            <input type="text"
                placeholder={placeholder}
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                onKeyUp={handlerKeyUp}
            />

            <button onClick={() => onQuery(query)}>Buscar</button>
        </div>
    )
}
