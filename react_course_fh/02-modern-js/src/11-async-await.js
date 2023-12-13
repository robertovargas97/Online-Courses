
const getImageUrl = async () => {
    const apiKey = "9zmmY8FuahEpjX59V7QW31CGCPcdHqzs";
    const apiUrl = `http://api.giphy.com/v1/gifs/random?api_key=${apiKey}`;
    const response = await fetch(apiUrl);
    const { data } = await response.json();
    const { url } = data.images.original;
    return url;
}

const addImageToHtml = (url) => {
    const img = document.createElement("img");
    img.src = url;
    document.body.append(img);
}

getImageUrl()
    .then((imageUrl) => {
        addImageToHtml(imageUrl);
    });




