import React from 'react';

export default class HeroImage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    //If the component comes through with an image resolved use that, otherwise use the test image
    //NOTE: For locales with no fallback or localized images added, this can happen currently
    const imageURL = (this.props.fields.image && this.props.fields.image.fields.file) ? this.props.fields.image.fields.file.url : this.props.defaultImageURL;

    return (
      <div data-content-type='heroImage'
        className="hero-image"
        style={{backgroundImage: `url(https:${imageURL}?w=1600&q=80&fm=jpg&fl=progressive)` }}
      >
        {/* The following sprite is to help load the background image faster */}
        <img src={`https:${imageURL}?w=1600&q=80&fm=jpg&fl=progressive`} style={{display:'none'}} />
      </div>
    )
  }
}
