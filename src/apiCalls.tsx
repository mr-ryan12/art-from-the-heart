const getArtDetails = (category: string) => {
  return fetch(`https://api.artic.edu/api/v1/artworks/search?q=${category}&fields=image_id,title,date_start,date_end`)
  .then(response => response.json())
}

export { getArtDetails }