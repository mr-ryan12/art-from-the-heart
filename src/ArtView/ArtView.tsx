import React, { Component } from 'react';
import './ArtView.scss';

interface State {
  userLikesPhoto: boolean | undefined;
}

interface Props {
  id: number;
  image_src: string;
  description: string;
  title: string;
  date_start: number;
  artist_title: string;
  classification_titles: Array<string>;

}

class ArtView extends Component<{}, State> {
  constructor(props: object) {
    super(props)
    this.state = {
      userLikesPhoto: undefined,
     }
  }
  render() {
    return(
      <div className="art-view-container">
           <img className="featured-art" src="https://www.artic.edu/iiif/2/1adf2696-8489-499b-cad2-821d7fde4b33/full/843,/0/default.jpg" alt="painting of people at a park on a sunny day" />
        <div className="user-choices">
          <button className="ratings-choice" >👍</button>  
          <button className="ratings-choice" >👎</button>  
        </div>
      </div>
    )
  }
}

export default ArtView;