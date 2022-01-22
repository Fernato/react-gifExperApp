import React, {} from 'react'
import { useFetchGif } from '../hooks/useFetchGif'
//import { getGifs } from '../helpers/getGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({category}) => {

    /*
    const [images, setImages] = useState([]);

    
    */

    const {data:images, loading} = useFetchGif(category);

   

    return (
        <>
            <h3 className='animate__animated animate__fadeIn'>{ category }</h3>

            {loading && <p className='animate__animated animate__flash'>Loading</p>}

            <div className='cad-grid'>
                {
                    images.map((img) =>(
                        <GifGridItem 
                        key = {img.id}
                        {...img} 
                        />
                    ))
                    }
                
            </div>        
        </>

    )
}
