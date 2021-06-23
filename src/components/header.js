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
      <div className='headerx flex flex-col lg:flex-row justify-items-centerx 
      items-center lg:absolute lg:top-0 w-full  z-20' data-content-type='header'>
        <div className="relative w-full flex flex-col lg:flex-row items-center 
        justify-items-center lg:w-7/12 lg:float-left">
          <picture>
            <source srcSet={`https:${imageURL}?h=50&fm=webp`} type="image/webp" />
            <img src={`https:${imageURL}?h=50&fm=png`} />
          </picture>
        </div>
        <div className='relative w-fullx lg:w-5/12 flex flex-row flex-wrap lg:flex-nowrap p-2 lg:float-right justify-content-end'>
          {this.props.fields.navigationLinks.map((navLink) => {
            return (
              <div 
              key={navLink.sys.id}
              className='mr-2 p-2 rounded lg:opacity-60 lg:hover:opacity-95 bg-white hover:bg-blue-200 text-white font-bold'
              > 
              <a
                className='nav-itemx nav-linkx mr-2 font-bold no-underline'
                href={navLink.fields.url === undefined ? "#" : navLink.fields.url}>
                <strong>{navLink.fields.displayText}</strong>
              </a>
              </div>
            )
          })}
        </div>
      </div>
    )
  }
}
