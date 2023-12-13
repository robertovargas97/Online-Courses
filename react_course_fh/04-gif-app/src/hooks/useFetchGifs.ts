import { useEffect, useState } from 'react';
import { Gif, getGifs } from '../utils/getGifs';

type UseFetchGifsReturnValue = {
    gifs: Gif[]
    isLoading: boolean;
}

type FetchGifsHookType = (category: string) => UseFetchGifsReturnValue;

export const useFetchGifs: FetchGifsHookType = (category) => {

    const initialGifsArray: Gif[] = []
    const [gifs, setGifs] = useState(initialGifsArray);
    const [isLoading, setIsLoading] = useState(true);

    const fetchGifs = async () => {
        const gifsArray = await getGifs(category);
        setGifs(gifsArray);
        setIsLoading(false);
    }

    useEffect(() => {
        fetchGifs();
    }, []);

    return { gifs, isLoading }
}
