import React from 'react';

export default class HeroImage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    //If the component comes through with an image resolved use that, otherwise use the test image
    //NOTE: For locales with no fallback or localized images added, this can happen currently
    //const imageURL = (this.props.fields.image && this.props.fields.image.fields.file) ? this.props.fields.image.fields.file.url : this.props.defaultImageURL;

    let imageURL = '';
    if (this.props.fields.cloudinaryImage && this.props.fields.cloudinaryImage[0] && this.props.fields.cloudinaryImage[0].secure_url) {
      imageURL = this.props.fields.cloudinaryImage[0].secure_url + '?w=1600&q=80&fm=webp';
    } else {
      imageURL = (this.props.fields.image && this.props.fields.image.fields.file) ? this.props.fields.image.fields.file.url : this.props.defaultImageURL;
      imageURL = imageURL + '?w=1600&q=80&fm=jpg&fl=progressive';
    }

    return (
        <div data-content-type='heroImage'
             className="hero-image bg-fixed"
             style={{backgroundImage: `url(${imageURL})`}}
        >
          
          {/* The following sprite is to help load the background image faster */}
          <img src={`${imageURL}`} style={{display: 'none'}}/>
        </div>
    )
  }
}
