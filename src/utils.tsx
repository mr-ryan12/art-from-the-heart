interface ImageDetails {
  id: number;
  image_src: string;
  description: string;
  title: string;
  date_start: number;
  date_end: number;
  image_id: string;
  artist_title: string;
}

const getRandomIndex = (max: number) => {
  return Math.floor(Math.random() * max);
}

const cleanImages = (data: Array<ImageDetails>) => {
  // needs to pass in data.data (array of objects)
  // needs to return the image id of an object that does not match the ones we don't want
  console.log(data)
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
  console.log(filteredImages)
  const randomImageId: string = filteredImages[getRandomIndex(filteredImages.length)].image_id
  return randomImageId
}

// Image Id's for removal

// Photography: 
//      nudity: d42239f2-878e-f15e-e5fc-4a041eb4ab01
//      nudity: c40c75eb-0cb2-9eac-7dfc-a8ed68402f11
//      creepyAF (beekeeper): 41f9a984-5c5b-bc7d-09d7-9b6fe0f348c9

// Watercolor:
//      nude sketch: c6d942be-2c75-a2cb-51a8-bc9eef666732

// Painting:
//      not a painting: 71866427-501e-0984-120a-94a70dd26368
//      cupid being whipped/nudity: 0f951635-312c-0829-451b-553f461c5518
//      creepy slaughter: 024d361d-31d1-e53b-cca0-ee14f822347f

// Oil Painting:
//      also found in 'painting': 78c80988-6524-cec7-c661-a4c0a706d06f
//      also found in 'painting': ae5c4d0f-5ff0-1e5d-172c-a7c4e973d4e1

// Sculpture:
//      not a sculpture: eba96384-a71c-b9a5-a105-0e4a6bd0b39d

// Pastel:
//      borderline?: 4fdb3d35-3bb9-1746-ba22-fcbe0387b0e9

// Chalk:
//      says chalk in the information but crayons in the title: 77d0cf9f-f656-95cc-a3d9-0bf3b2639af9
//      nudity/sketch: cf95a821-e48a-1d64-0375-47e7597fb197
//      not a drawing (Chalk Hill Drive-in Dallas): 297b9a01-d6b6-408b-8747-e620bd03c374

export default cleanImages