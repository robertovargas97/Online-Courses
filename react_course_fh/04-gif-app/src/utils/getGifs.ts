
export type Gif = {
    id: string,
    title: string,
    url: string
}

export const getGifs = async (category: string): Promise<any> => {
    const apiUrl = `https://api.giphy.com/v1/gifs/search?api_key=9zmmY8FuahEpjX59V7QW31CGCPcdHqzs&q=${category}&limit=10`;
    const response: Response = await fetch(apiUrl);
    const { data = [] } = await response.json();

    const gifs: Gif[] = data.map((gif: any) => ({
        id: gif.id,
        title: gif.title,
        url: gif.images.downsized_medium.url
    }));

    return gifs;
}