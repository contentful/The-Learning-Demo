import React from 'react';

export default class TextWithImage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    //If the component comes through with an image resolved use that, otherwise use the test image
    //NOTE: For locales with no fallback or localized images added, this can happen currently
    const imageURL = (this.props.fields.image && this.props.fields.image.fields.file) ? this.props.fields.image.fields.file.url : this.props.defaultImageURL;

    return (
      <div data-content-type='textWithImage' className={this.props.className}>
        <div>{this.props.fields.text}</div>
        <img
          src={`https:${imageURL}`}
          className={`img-fluid ${this.props.fields.imagePosition}`} />
      </div>
    )
  }
}
