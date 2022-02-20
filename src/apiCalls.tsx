const getArtDetails = (category: string) => {
  return fetch(`https://api.artic.edu/api/v1/artworks/search?q=${category}&fields=image_id,title,date_start,date_end`)
  .then(response => response.json())
}

const getArtImage = (id: string) => {
  return fetch(`https://www.artic.edu/iiif/2/${id}/full/843,/0/default.jpg`)
  .then(response => response.json())
}

export { getArtDetails, getArtImage }