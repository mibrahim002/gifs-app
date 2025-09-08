import { useRef, useState } from "react"
import type { Gif } from "../interfaces/gif.interface"
import { getGifsByQuery } from "../actions/get-gifs-by-query.action"



export const useGifs = () => {
    const [previousTerms, setPreviousTerms] = useState<string[]>([])
    const [gifs, setGifs] = useState<Gif[]>([])
    const gifsCache = useRef<Record<string, Gif[]>>({})

    const handleTermClicked = async (term: string) => {
        if (gifsCache.current[term]) {
            setGifs(gifsCache.current[term])
            return;
        }
        const gifs = await getGifsByQuery(term)
        setGifs(gifs)

        gifsCache.current[term] = gifs;



    }

    const handlerSearch = async (query: string) => {
        query = query.toLocaleLowerCase().trim()
        if (query.length == 0) return;
        if (previousTerms.includes(query)) return;

        console.log({ query })

        const currentTerms = [query, ...previousTerms].splice(0, 7)

        setPreviousTerms(currentTerms)

        const gifs = await getGifsByQuery(query)
        console.log({ gifs })
        setGifs(gifs)
        gifsCache.current[query] = gifs;


    }

    return {
        // Values
        previousTerms,
        gifs,

        // Methods
        handleTermClicked,
        handlerSearch




    }
}