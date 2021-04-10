
export const getGifs = async (category) => {

    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=10&api_key=QFtZk4YgKPCurB6hv2clSGNK21ZkY1Ke`;
    const resp = await fetch(url);
    const { data }  = await resp.json();

    const gifs = data.map(elem => {
        return {
            id: elem.id,
            title: elem.title,
            url: elem.images?.['downsized_medium'].url
        }             
    })

    return gifs;
    // setImages(gifs)
}