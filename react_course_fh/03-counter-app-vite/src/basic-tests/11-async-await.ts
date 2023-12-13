
export const getImageUrl = async (apikey?: string): Promise<string> => {
    const apiKey = (apikey) ? apikey : "9zmmY8FuahEpjX59V7QW31CGCPcdHqzs";
    const apiUrl = `http://api.giphy.com/v1/gifs/random?api_key=${apiKey}`;
    const response = await fetch(apiUrl);
    const { data } = await response.json();
    const { url } = data.images.original;
    return url;
}

