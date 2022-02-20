import React, { Component } from 'react';
import './ArtView.scss';

interface State {
  userLikesPhoto: boolean | undefined;
}

interface Props {
imageId: string
}

class ArtView extends Component< Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = {
      userLikesPhoto: undefined,
    }
  }
  render() {
    return(
      <div className="art-view-container">
        <img className="featured-art" src={`https://www.artic.edu/iiif/2/${this.props.imageId}/full/843,/0/default.jpg`} alt="painting of people at a park on a sunny day" />
        <div className="user-choices">
          <button className="ratings-choice" >👍</button>  
          <button className="ratings-choice" >👎</button>  
        </div>
      </div>
    )
  }
}

export default ArtView;