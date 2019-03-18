import React from 'react';

export default class ImageWithCaption extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    //If the component comes through with an image resolved use that, otherwise use the test image
    //NOTE: For locales with no fallback or localized images added, this can happen currently
    const imageURL = (this.props.fields.image && this.props.fields.image.fields.file) ? this.props.fields.image.fields.file.url : this.props.defaultImageURL;

    return (
      <div data-content-type='imageWithCaption' className={this.props.className} >
        <picture>
          <source srcSet={`https:${imageURL}?fit=fill&fm=webp&h=400&w=600`} type="image/webp" className='mx-auto img-with-caption img-fluid rounded my-sm-3' />
          <img src={`https:${imageURL}?fit=fill&fm=jpg&h=400&w=600`}
              className='mx-auto img-with-caption img-fluid rounded my-sm-3' />
        </picture>
        <div className='caption text-center'>{this.props.fields.caption}</div>
      </div>
    )
  }
}
