import React,{useState, useEffect} from 'react'
import { getGifs } from '../helpers/getGifs';

export const useFetchGif = (category) =>{

    const [state, setState] = useState({
        data : [],
        loading : true
    });

    //lo que esta adentro se llama una sola vez
    useEffect( ()=>{
        getGifs(category)
            .then(imgs =>{
                    setState({
                        data : imgs,
                        loading: false
                    });
               
            });
    }, [category])

    return state;
}