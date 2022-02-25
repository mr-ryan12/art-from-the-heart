const getArtDetails = (category: string) => {
  return fetch(`https://api.artic.edu/api/v1/artworks/search?q=${category}&page=4&fields=id,image_id,title,date_start,date_end,artist_title,thumbnail&limit=15`)
  .then(response => {
    if(!response.ok) {
      if(response.status >= 500) {
        throw new Error(`${response.status}. I am so sorry for the inconvenience! The server is down. Please try again, later.`)
      } else if (response.status === 404) {
        throw new Error(`${response.status}. We apologize for the inconvenience. Please try again, or go back to the Main Page.`)
      } else {
        throw new Error(`${response.status}. We apologize for the inconvenience. Please try again later.`)
      }
    } else {
      return response.json()
    }
  })
}

export { getArtDetails }

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