export const getGifs = async(category) => {
  const url = `https://api.giphy.com/v1/gifs/search?api_key=FR9js2vV792bhpi5AMt61MdNH3qPXTyH&q=${category}&limit=20`;

  const resp = await fetch(url);
  const {data} = await resp.json();

  const gifs = data.map(img => ({
      id: img.id,
      title: img.title,
      url: img.images.downsized_medium.url
  }));

  return gifs;
}
