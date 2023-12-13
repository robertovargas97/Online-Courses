const apiKey = "9zmmY8FuahEpjX59V7QW31CGCPcdHqzs";

const apiUrl = `http://api.giphy.com/v1/gifs/random?api_key=${apiKey}`;

const httpRequest = fetch(apiUrl);

httpRequest
    .then((response) => response.json())
    .then(({ data }) => {
        const { url } = data.images.original;
        const img = document.createElement("img");

        img.src = url;
        document.body.append(img);
    })
    .catch((error) => {
        console.error(error);
    });




