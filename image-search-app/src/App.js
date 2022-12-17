import { createContext, useState } from 'react';
import Images from './components/Images'
import Jumbotron from './components/Jumbotron'
import SearchField from './components/SearchField'
import useAxios from './hooks/useAxios';

//Context API
export const ImageContext = createContext()

const App = () => {
  const [searchImage, setSearchImage] = useState("")
  const { error, isLoading, response, fetchData } = useAxios(`search/
photos?page=1&query=Italy&client_id=${process.env.REACT_APP_ACCESS_KEY}`)


  const providerValue = {
    error,
    isLoading,
    response,
    searchImage,
    fetchData,
    setSearchImage
  }
  return (
    <ImageContext.Provider value={providerValue}>
      <Jumbotron>
        <SearchField />
      </Jumbotron>
      <Images />
    </ImageContext.Provider>
  )
}

export default App