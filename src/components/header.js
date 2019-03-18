import React from 'react';

export default class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    //If the component comes through with an image resolved use that, otherwise use the test image
    //NOTE: For locales with no fallback or localized images added, this can happen currently
    const imageURL = (this.props.fields.logo && this.props.fields.logo.fields.file) ? this.props.fields.logo.fields.file.url : this.props.defaultImageURL;

    return (
      <div className='header' data-content-type='header'>
        <div>
          <picture>
            <source srcSet={`https:${imageURL}?h=50&fm=webp`} type="image/webp" />
            <img src={`https:${imageURL}?h=50&fm=png`} />
          </picture>
        </div>
        <div className='nav nav-justified justify-content-end'>
          {this.props.fields.navigationLinks.map((navLink) => {
            return (
              <a
                key={navLink.sys.id}
                className='nav-item nav-link'
                href={navLink.fields.url === undefined ? "#" : navLink.fields.url}>
                <strong>{navLink.fields.displayText}</strong>
              </a>
            )
          })}
        </div>
      </div>
    )
  }
}
