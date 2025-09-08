import { CustomHeader } from './shared/components/CustomHeader'
import { SearchBar } from './shared/components/SearchBar'
import { PreviousSearches } from './gifs/components/PreviousSearches'
import { GifsList } from './gifs/components/GifsList'
import { useGifs } from './gifs/hooks/useGifs'

export const GifsApp = () => {
    const {previousTerms, gifs, handlerSearch, handleTermClicked} = useGifs()
  return (
    <>
        {/* Header */}
        <CustomHeader title='Buscador de Gifs'
        description='Descubre y comparte el Gifs perfecto'
        />

        {/* Search */}
       <SearchBar 
            placeholder='Busca lo que quieras'
            onQuery={handlerSearch}
            />

        {/* Previous Searches*/}
        <PreviousSearches 
            searches={previousTerms} 
            onLabelClick={handleTermClicked}
            />

        {/* Gifs */}
        <GifsList gifs={gifs}/>

    </>
  )
}
