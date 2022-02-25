interface ImageDetails {
  id: number;
  image_src: string;
  description: string;
  title: string;
  date_start: number;
  date_end: number;
  image_id: string;
  artist_title: string;
  thumbnail: {
    alt_text: string;
    height: number;
    lqip: string;
    width: number;
  }
}

const getRandomIndex = (max: number) => {
  return Math.floor(Math.random() * max)
}

const cleanImages = (data: Array<ImageDetails>) => {
  const filteredImages = data.filter(image => {
    if (image.image_id !== 'd42239f2-878e-f15e-e5fc-4a041eb4ab01'
      && image.image_id !== 'c40c75eb-0cb2-9eac-7dfc-a8ed68402f11'
      && image.image_id !== '41f9a984-5c5b-bc7d-09d7-9b6fe0f348c9' 
      && image.image_id !== 'c6d942be-2c75-a2cb-51a8-bc9eef666732' 
      && image.image_id !== '71866427-501e-0984-120a-94a70dd26368' 
      && image.image_id !== '0f951635-312c-0829-451b-553f461c5518' 
      && image.image_id !== '024d361d-31d1-e53b-cca0-ee14f822347f' 
      && image.image_id !== '78c80988-6524-cec7-c661-a4c0a706d06f' 
      && image.image_id !== 'ae5c4d0f-5ff0-1e5d-172c-a7c4e973d4e1' 
      && image.image_id !== 'eba96384-a71c-b9a5-a105-0e4a6bd0b39d' 
      && image.image_id !== '4fdb3d35-3bb9-1746-ba22-fcbe0387b0e9' 
      && image.image_id !== '77d0cf9f-f656-95cc-a3d9-0bf3b2639af9' 
      && image.image_id !== 'cf95a821-e48a-1d64-0375-47e7597fb197' 
      && image.image_id !== '297b9a01-d6b6-408b-8747-e620bd03c374' 
    ) {
      return image
    }
  })

  const randomImageId: string = filteredImages[getRandomIndex(filteredImages.length)].image_id
  return randomImageId
}

const cleanImageDetails = (image: any) => {
  return {
    id: image.id,
    artist_title: image.artist_title === null ? 'No information available' : image.artist_title,
    date_end: image.date_end === null ? 'No information available' : image.date_end,
    date_start: image.date_start === null ? 'No information available' : image.date_start,
    image_id: image.image_id === null ? 'No information available' : image.image_id,
    thumbnail: {
      alt_text: image.thumbnail.alt_text === null ? 'No information available' : image.thumbnail.alt_text,
      height: image.thumbnail.height,
      lqip: image.thumbnail.lqip,
      width: image.thumbnail.width
    },
    title: image.title === null ? 'No information available' : image.title
  }
}

export { cleanImages, cleanImageDetails }