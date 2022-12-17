import { useContext } from 'react'
import { ImageContext } from './../App';
import Image from './Image';
import Skeleton from './Skeleton';

const Images = () => {
    const { response, isLoading, searchImage } = useContext(ImageContext)
    return (
        <div>
            <h1 className='text-center mt-6 underline text-2xl'>Results for {searchImage || "Italy"}</h1>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 my-10 max-w-5xl mx-auto px-4'>
                {isLoading ? <Skeleton item={response.length} /> : (

                    response.map((res, index) => (
                        <Image key={index} res={res} />
                    ))
                )
                }
            </div>

        </div>
    )
}

export default Images